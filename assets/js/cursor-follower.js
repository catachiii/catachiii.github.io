// Cursor-follower background, echoing the OpenAI Codex hero effect.
// As the pointer moves it deposits markers along its path. Each marker ages
// through a lifecycle -- binary digit (core) -> ">" -> "-" -> gone -- so the
// trail forms from older markers decaying behind the cursor, and a still
// pointer simply stops depositing and everything ages out on its own.
// Per-cell hashing gives each marker its own lifespan and glyph tendency, so
// the cluster dissolves unevenly and the surround varies from stamp to stamp.
// Pure canvas, no dependencies. Reads the active theme color from CSS vars so
// it tracks the light/dark toggle, and honors prefers-reduced-motion.
(function () {
  "use strict";

  const canvas = document.getElementById("cursor-follower-bg");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Tunables ---------------------------------------------------------------
  const SPACING = 16; // px between grid cells (smaller = denser)
  const CORE_RADIUS = SPACING * 1.5; // fresh markers within this are digits (~9)
  const HALO_RADIUS = SPACING * 3.0; // out to here they seed as faint "-"/">"
  const HALO_ENERGY = 0.62; // starting energy of the halo ring
  const LIFETIME = 750; // base ms for a marker to age from full to gone
  const LIFE_JITTER = 0.9; // +/- fraction of LIFETIME randomized per cell
  const CORE_ARROW_CHANCE = 0.35; // odds a non-center core cell starts as ">"
  const HALO_DENSITY = 0.6; // fraction of halo cells that actually seed
  const OPACITY = 0.3; // constant marker opacity (kept low for readability)

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Last raw pointer position, so we can deposit along the exact path.
  let lastX = null;
  let lastY = null;

  // Smoothed direction of travel; ">"/"-" markers point along it.
  let dirX = 1;
  let dirY = 0;

  let lastFrame = -1; // performance.now() of the previous frame

  // Live markers, keyed "ix,iy" -> { energy, dx, dy, life }. A cell is removed
  // once its energy decays to zero.
  const cells = new Map();

  // Deterministic 0/1 per grid cell, so a core marker keeps its digit for its
  // whole life instead of flickering.
  function cellBit(ix, iy) {
    let h = (ix * 374761393 + iy * 668265263) | 0;
    h = (h ^ (h >>> 13)) * 1274126177;
    h = h ^ (h >>> 16);
    return h & 1 ? "1" : "0";
  }

  // Stable pseudo-random in [0,1) per cell; `salt` selects an independent
  // stream (lifespan vs. glyph tendency vs. halo presence).
  function hash01(ix, iy, salt) {
    let h = (ix * 374761393 + iy * 668265263 + salt * 2246822519) | 0;
    h = (h ^ (h >>> 13)) * 1274126177;
    h = (h ^ (h >>> 16)) >>> 0;
    return h / 4294967296;
  }

  // Theme color, refreshed on theme toggle.
  let themeColor = readThemeColor();

  function readThemeColor() {
    const c = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-theme-color")
      .trim();
    return c || "#005CAF";
  }

  // Convert a hex/rgb color into an "r, g, b" string usable in rgba().
  function toRGBTriplet(color) {
    if (color.startsWith("#")) {
      let hex = color.slice(1);
      if (hex.length === 3) hex = hex.split("").map((h) => h + h).join("");
      const num = parseInt(hex, 16);
      return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
    }
    const m = color.match(/\d+/g);
    return m ? `${m[0]}, ${m[1]}, ${m[2]}` : "0, 92, 175";
  }

  let rgb = toRGBTriplet(themeColor);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  }

  // Create or refresh a single marker cell (energy is kept at its max).
  // `ch` optionally pins the core glyph (used by cat silhouettes); when
  // omitted the core digit comes from the per-cell hash.
  function setMarker(ix, iy, energy, life, ddx, ddy, ch) {
    const key = ix + "," + iy;
    const cell = cells.get(key);
    if (cell) {
      if (energy > cell.energy) cell.energy = energy;
      if (life > cell.life) cell.life = life;
      cell.dx = ddx;
      cell.dy = ddy;
      if (ch != null) cell.ch = ch;
    } else {
      cells.set(key, { energy: energy, dx: ddx, dy: ddy, life: life, ch: ch });
    }
  }

  // Stamp / refresh markers around a single point on the path.
  function deposit(x, y) {
    const cix = Math.round(x / SPACING);
    const ciy = Math.round(y / SPACING);
    const reach = Math.ceil(HALO_RADIUS / SPACING);
    for (let ix = cix - reach; ix <= cix + reach; ix++) {
      for (let iy = ciy - reach; iy <= ciy + reach; iy++) {
        const dx = ix * SPACING - x;
        const dy = iy * SPACING - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > HALO_RADIUS) continue;

        let energy;
        if (dist <= CORE_RADIUS) {
          energy = 1;
          // Some of the 8 neighbors start as ">" rather than a digit, so the
          // core isn't a rigid block of digits every time.
          if (dist > SPACING * 0.6 && hash01(ix, iy, 2) < CORE_ARROW_CHANCE) {
            energy = 0.6; // starts in the ">" band
          }
        } else {
          // Thin the halo so the "-"/">" surround varies in count.
          if (hash01(ix, iy, 3) > HALO_DENSITY) continue;
          energy = HALO_ENERGY * (1 - (dist - CORE_RADIUS) / (HALO_RADIUS - CORE_RADIUS));
        }
        if (energy <= 0) continue;

        // Per-cell lifespan -> markers die at different speeds.
        const life = LIFETIME * (1 + (hash01(ix, iy, 1) * 2 - 1) * LIFE_JITTER);
        setMarker(ix, iy, energy, life, dirX, dirY);
      }
    }
  }

  // A "pool" of 0/1 digits that clicks add to. Each click launches a burst
  // that spreads outward from the click point, filling an irregular blob of
  // digits ringed by ">"/"-"; repeated clicks grow it larger, then -- like
  // every other marker -- the digits age out and disappear.
  const POOL_START_RADIUS = 2.5; // blob radius (cells) of the first click
  const POOL_GROW = 0.8; // how much the radius grows per click
  const POOL_MAX_RADIUS = 10; // cap so it can't swallow the whole viewport
  const POOL_LIFE = LIFETIME * 4; // base lifespan of pool digits
  const POOL_RESET_MS = 3500; // idle gap after which the pool starts small again
  const POOL_SPREAD = 0.013; // cells per ms the wave front expands (kept slow
  // so cells age 0/1 -> ">" -> "-" as the front moves past them)
  const TWO_PI = Math.PI * 2;
  let poolRadius = POOL_START_RADIUS;
  let lastPoolTime = -Infinity;
  let lastPoolX = -Infinity;
  let lastPoolY = -Infinity;

  // Active spreading bursts; each fills its blob outward over several frames.
  const bursts = [];

  // Launch a burst centered on (x, y).
  function spawnPool(x, y) {
    const now = performance.now();
    // Keep growing only while clicking within the current pool; a click far
    // away (or after a long idle gap) starts a fresh small pool.
    const ddx = x - lastPoolX;
    const ddy = y - lastPoolY;
    const near = ddx * ddx + ddy * ddy <= (poolRadius * SPACING) ** 2;
    if (!near || now - lastPoolTime > POOL_RESET_MS) poolRadius = POOL_START_RADIUS;
    lastPoolTime = now;
    lastPoolX = x;
    lastPoolY = y;

    bursts.push({
      cix: Math.round(x / SPACING),
      ciy: Math.round(y / SPACING),
      R: poolRadius,
      // Random per-click wobble so the outline is lumpy, not a clean circle.
      p1: Math.random() * TWO_PI,
      p2: Math.random() * TWO_PI,
      p3: Math.random() * TWO_PI,
      front: 0, // how far the wave has spread so far (in cells)
    });
    poolRadius = Math.min(poolRadius + POOL_GROW, POOL_MAX_RADIUS);
  }

  // Advance every burst's wave front and stamp the ring of cells it just
  // reached this frame, so the pool visibly grows from the center out.
  function growBursts(dt) {
    for (let b = bursts.length - 1; b >= 0; b--) {
      const burst = bursts[b];
      const prev = burst.front;
      burst.front += POOL_SPREAD * dt;
      const front = burst.front;
      const R = burst.R;
      const cix = burst.cix;
      const ciy = burst.ciy;
      const rc = Math.ceil(R * 1.7) + 2;

      for (let ix = cix - rc; ix <= cix + rc; ix++) {
        for (let iy = ciy - rc; iy <= ciy + rc; iy++) {
          const dx = ix - cix;
          const dy = iy - ciy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ang = Math.atan2(dy, dx);
          const wob =
            1 + 0.3 * Math.sin(2 * ang + burst.p1) + 0.22 * Math.sin(3 * ang + burst.p2) + 0.15 * Math.sin(5 * ang + burst.p3);
          const edge = R * wob; // wobbly boundary radius (in cells)

          // A cell is "reached" at its arrival radius: its own distance if it
          // is inside the blob, or the boundary if it is a halo cell.
          let arrival;
          let inside;
          if (dist <= edge) {
            arrival = dist;
            inside = true;
          } else if (dist <= edge + 2) {
            arrival = edge;
            inside = false;
          } else {
            continue;
          }
          if (arrival < prev || arrival > front) continue; // not this frame's ring

          const life = POOL_LIFE * (0.6 + hash01(ix, iy, 6) * 0.8);
          if (inside) {
            setMarker(ix, iy, 1, life, 1, 0, cellBit(ix, iy));
          } else {
            const over = dist - edge;
            const energy = over <= 1 ? 0.6 : 0.3;
            const ol = dist || 1;
            setMarker(ix, iy, energy, life, dx / ol, dy / ol);
          }
        }
      }

      if (front >= R * 1.7) bursts.splice(b, 1); // fully spread
    }
  }

  // Left-click on empty page area (not a link/control/media) grows the pool.
  function onClick(e) {
    if (e.button !== 0) return;
    if (
      e.target.closest(
        "a, button, input, textarea, select, label, summary, [role='button'], [onclick], .no-cat"
      )
    ) {
      return;
    }
    spawnPool(e.clientX + window.scrollX, e.clientY + window.scrollY);
  }

  function onMove(e) {
    const point = e.touches ? e.touches[0] : e;
    // Track the pointer in client space (so scrolling never fakes a move) but
    // deposit in document space (so markers scroll with the page).
    const x = point.clientX;
    const y = point.clientY;
    const sx = window.scrollX;
    const sy = window.scrollY;

    if (lastX === null) {
      lastX = x;
      lastY = y;
      deposit(x + sx, y + sy);
      return;
    }

    const dx = x - lastX;
    const dy = y - lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 0) {
      dirX += (dx / dist - dirX) * 0.3;
      dirY += (dy / dist - dirY) * 0.3;
      const dl = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
      dirX /= dl;
      dirY /= dl;

      // Deposit along the whole segment so even fast flicks leave no gaps.
      const steps = Math.min(Math.ceil(dist / (SPACING * 0.5)), 60);
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        deposit(lastX + dx * t + sx, lastY + dy * t + sy);
      }
    }
    lastX = x;
    lastY = y;
  }

  function draw(now) {
    const dt = lastFrame < 0 ? 16 : Math.min(now - lastFrame, 64);
    lastFrame = now;

    growBursts(dt); // spread any active click bursts before rendering

    ctx.clearRect(0, 0, width, height);

    // Markers live in document space; offset by the scroll so they move with
    // the page instead of staying pinned to the viewport.
    const sx = window.scrollX;
    const sy = window.scrollY;

    for (const [key, cell] of cells) {
      cell.energy -= dt / cell.life;
      if (cell.energy <= 0) {
        cells.delete(key);
        continue;
      }

      const comma = key.indexOf(",");
      const ix = parseInt(key.slice(0, comma), 10);
      const iy = parseInt(key.slice(comma + 1), 10);
      const px = ix * SPACING - sx;
      const py = iy * SPACING - sy;
      // Skip anything scrolled out of view (still aged above).
      if (px < -SPACING || px > width + SPACING || py < -SPACING || py > height + SPACING) {
        continue;
      }

      ctx.fillStyle = `rgba(${rgb}, ${OPACITY})`;

      if (cell.energy > 0.66) {
        // Core: a stable binary digit, drawn upright. Pool/pinned cells carry
        // their own digit; trail cells use the per-cell hash.
        const digit = cell.ch != null ? cell.ch : cellBit(ix, iy);
        ctx.fillText(digit, px, py);
      } else {
        // Aging: ">" then "-", pointing along the travel direction.
        const glyph = cell.energy > 0.33 ? ">" : "-";
        const angle = Math.atan2(cell.dy, cell.dx);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle);
        ctx.fillText(glyph, 0, 0);
        ctx.restore();
      }
    }

    requestAnimationFrame(draw);
  }

  // Wire up ----------------------------------------------------------------
  resize();
  window.addEventListener("resize", resize);

  // Refresh the color when the theme attribute flips.
  new MutationObserver(() => {
    themeColor = readThemeColor();
    rgb = toRGBTriplet(themeColor);
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  if (reduceMotion) {
    // Respect reduced motion: no pointer tracking, no animation loop.
    return;
  }

  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("click", onClick);
  requestAnimationFrame(draw);
})();
