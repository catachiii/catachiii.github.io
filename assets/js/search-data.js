// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "A growing collection of robots I have worked with, games that have influenced my life and some photos I have taken.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-reading",
          title: "reading",
          description: "A collection of books I have read.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-started-my-bachelor-in-vehicle-engineering-at-department-of-automotive-engineering-tsinghua-university-beijing-china",
          title: '🏫 I started my bachelor in vehicle engineering at Department of Automotive Engineering,...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-integrated-excellence-scholarship-from-tsinghua-university",
          title: '🎉 I was awarded Integrated Excellence Scholarship from Tsinghua University.',
          description: "",
          section: "News",},{id: "news-i-was-awarded-academic-excellence-scholarship-and-volunteer-public-service-scholarship-from-tsinghua-university",
          title: '🎉 I was awarded Academic Excellence Scholarship and Volunteer Public Service Scholarship from...',
          description: "",
          section: "News",},{id: "news-i-spent-three-wonderful-weeks-at-rwth-aachen-university-winter-school-in-aachen-germany",
          title: '🇩🇪 I spent three wonderful weeks at RWTH AACHEN University Winter School in...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-academic-excellence-scholarship-again-and-friends-of-tsinghua-scholarship-german-scholarship-from-tsinghua-university",
          title: '🎉 I was awarded Academic Excellence Scholarship again;) and Friends of Tsinghua Scholarship...',
          description: "",
          section: "News",},{id: "news-i-received-my-bachelor-degree-in-vehicle-engineering-from-school-of-vehicle-and-mobility-tsinghua-university-beijing-china",
          title: '🎓 I received my bachelor degree in vehicle engineering from School of Vehicle...',
          description: "",
          section: "News",},{id: "news-i-started-my-master-program-in-mechanical-engineering-at-eth-zürich-switzerland",
          title: '🏫 I started my master program in mechanical engineering at ETH Zürich, Switzerland....',
          description: "",
          section: "News",},{id: "news-️-i-spent-a-wonderful-week-at-eth-robotics-summer-school-in-wangen-an-der-aare-a-broad-scope-of-components-of-autonomous-mobile-robots-including-state-estimation-trajectory-optimization-environment-mapping-and-artifact-detection-were-introduced-and-implemented-on-a-wheeled-platform-supermegabot",
          title: '⛰️ I spent a wonderful week at ETH Robotics Summer School in Wangen...',
          description: "",
          section: "News",},{id: "news-i-started-to-work-as-a-student-teaching-assistant-for-dynamic-programming-and-optimal-control-in-hs21-from-prof-dr-raffaello-d-andrea-at-eth-zürich",
          title: '📝 I started to work as a student teaching assistant for Dynamic Programming...',
          description: "",
          section: "News",},{id: "news-i-successfully-finished-my-semester-project-in-robotic-systems-lab-under-the-supervision-of-dr-firas-abi-farraj-dr-farbod-farshidian-prof-dr-marco-hutter-i-worked-on-improving-teleoperation-performance-using-model-predictive-control-for-alma",
          title: '📋 I successfully finished my semester project in Robotic Systems Lab under the...',
          description: "",
          section: "News",},{id: "news-i-started-to-work-as-a-student-teaching-assistant-for-recursive-estimation-in-fs22-from-prof-dr-raffaello-d-andrea-at-eth-zürich",
          title: '📝 I started to work as a student teaching assistant for Recursive Estimation...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-outstanding-teaching-assistant-award-from-department-of-mechanical-and-process-engineering-d-mavt-eth-zürich-check-website-post",
          title: '🎉 I was awarded Outstanding Teaching Assistant Award from Department of Mechanical and...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-announce-that-our-recent-work-from-robotic-systems-lab-haptic-teleoperation-of-high-dimensional-robotic-systems-using-a-feedback-mpc-framework-has-been-accepted-for-publication-in-the-proceedings-of-the-2022-ieee-rsj-international-conference-on-intelligent-robots-and-systems-iros-2022-which-will-be-held-on-october-23-27-2022-kyoto-japan",
          title: '📑 I am happy to announce that our recent work from Robotic Systems...',
          description: "",
          section: "News",},{id: "news-i-started-to-work-as-head-teaching-assistant-for-dynamic-programming-and-optimal-control-in-hs22-from-prof-dr-raffaello-d-andrea-at-eth-zürich",
          title: '📝 I started to work as head teaching assistant for Dynamic Programming and...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-master-thesis-in-robotic-systems-lab-under-the-supervision-of-alexander-reske-nikita-rudin-fabian-jenelten-dr-farbod-farshidian-prof-dr-marco-hutter-i-worked-on-imitating-model-predictive-controller-using-reinforcement-learning-for-perceptive-locomotion-for-anymal",
          title: '📋 I successfully defended my master thesis in Robotic Systems Lab under the...',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2022-ieee-rsj-international-conference-on-intelligent-robots-and-systems-iros-2022-in-kyoto-japan",
          title: '🇯🇵 I spent a wonderful week at the 2022 IEEE/RSJ International Conference on...',
          description: "",
          section: "News",},{id: "news-i-started-to-work-as-a-research-assistant-in-computational-robotics-lab-at-eth-zürich-under-the-supervision-of-prof-dr-stelian-coros-i-will-be-working-on-imitation-learning-for-quadruped-robots",
          title: '🇨🇭 I started to work as a research assistant in Computational Robotics Lab...',
          description: "",
          section: "News",},{id: "news-i-started-to-work-as-a-research-intern-in-autonomous-learning-group-at-max-planck-institute-for-intelligent-systems-mpi-is-tübingen-germany-under-the-supervision-of-prof-dr-georg-martius-i-will-be-working-on-reinforcement-learning-with-unsupervised-skill-discovery-for-quadruped-robots",
          title: '🇩🇪 I started to work as a research intern in Autonomous Learning group...',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2023-international-conference-on-robotics-and-automation-icra-2023-in-london-united-kingdom",
          title: '🇬🇧 I spent a wonderful week at the 2023 International Conference on Robotics...',
          description: "",
          section: "News",},{id: "news-i-received-my-master-degree-in-mechanical-engineering-from-eth-zürich-switzerland",
          title: '🎓 I received my master degree in mechanical engineering from ETH Zürich, Switzerland....',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-our-recent-work-from-computational-robotics-lab-rl-model-based-control-using-on-demand-optimal-control-to-learn-versatile-legged-locomotion-has-been-published-to-the-ieee-robotics-and-automation-letters-ra-l-journal-please-check-the-project-website-for-more-details",
          title: '📑 I am happy to share our recent work from Computational Robotics Lab,...',
          description: "",
          section: "News",},{id: "news-i-started-my-doctoral-journey-in-computer-science-at-eth-zürich-switzerland",
          title: '🏫 I started my doctoral journey in Computer Science at ETH Zürich, Switzerland....',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2023-conference-on-robot-learning-corl-2023-in-atlanta-united-states",
          title: '🇺🇸 I spent a wonderful week at the 2023 Conference on Robot Learning...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-our-recent-work-from-autonomous-learning-group-at-max-planck-institute-for-intelligent-systems-mpi-is-learning-diverse-skills-for-local-navigation-under-multi-constraint-optimality-accepted-for-publication-in-the-proceedings-of-2024-ieee-international-conference-on-robotics-and-automation-icra-2024-please-check-the-project-website-for-more-details",
          title: '📑 I am happy to share our recent work from Autonomous Learning group...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-our-recent-work-offline-diversity-maximization-under-imitation-constraints-from-autonomous-learning-group-at-max-planck-institute-for-intelligent-systems-mpi-is-has-been-accepted-for-publication-on-the-first-reinforcement-learning-conference-rlc-2024-please-check-the-project-website-for-more-details",
          title: '📑 I am happy to share our recent work Offline Diversity Maximization Under...',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2024-international-conference-on-robotics-and-automation-icra-2024-in-yokohama-japan",
          title: '🇯🇵 I spent a wonderful week at the 2024 International Conference on Robotics...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-our-recent-work-from-computational-robotics-lab-robotkeyframing-learning-locomotion-with-high-level-objectives-via-mixture-of-dense-and-sparse-rewards-has-been-accepted-for-publication-on-2024-conference-on-robot-learning-corl-2024-please-check-our-website-for-more-details",
          title: '📑 I am happy to share our recent work from Computational Robotics Lab,...',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2024-conference-on-robot-learning-corl-2024-in-munich-germany",
          title: '🇩🇪 I spent a wonderful week at the 2024 Conference on Robot Learning...',
          description: "",
          section: "News",},{id: "news-i-spent-a-wonderful-week-at-the-2024-ieee-ras-23rd-international-conference-on-humanoid-robots-humanoids-in-nancy-france",
          title: '🇫🇷 I spent a wonderful week at the 2024 IEEE RAS 23rd International...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-my-collaboration-work-with-multi-agent-robotic-motion-laboratory-at-national-university-of-singapore-dare-diffusion-policy-for-autonomous-robot-exploration-has-been-accepted-for-publication-in-the-proceedings-of-2025-ieee-international-conference-on-robotics-and-automation-icra-2025",
          title: '📑 I am happy to share my collaboration work with Multi-Agent Robotic Motion...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-my-collaboration-work-with-multi-agent-robotic-motion-laboratory-at-national-university-of-singapore-sata-safe-and-adaptive-torque-based-locomotion-policies-inspired-by-animal-learning-has-been-accepted-for-publication-in-the-proceedings-of-robotics-science-and-systems-rss-2025",
          title: '📑 I am happy to share my collaboration work with Multi-Agent Robotic Motion...',
          description: "",
          section: "News",},{id: "projects-adam",
          title: 'Adam',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adam/";
            },},{id: "projects-alan-wake",
          title: 'Alan Wake',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alanwake/";
            },},{id: "projects-alan-wake-2",
          title: 'Alan Wake 2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alanwake2/";
            },},{id: "projects-alma",
          title: 'ALMA',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alma/";
            },},{id: "projects-anymal",
          title: 'ANYmal',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anymal/";
            },},{id: "projects-unitree-b2",
          title: 'Unitree B2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/b2/";
            },},{id: "projects-beijing",
          title: 'Beijing 🇨🇳',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beijing/";
            },},{id: "projects-black-myth-wukong",
          title: 'Black Myth Wukong',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bmw/";
            },},{id: "projects-chengdu",
          title: 'Chengdu 🇨🇳',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chengdu/";
            },},{id: "projects-chongqing",
          title: 'Chongqing 🇨🇳',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chongqing/";
            },},{id: "projects-control",
          title: 'Control',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/control/";
            },},{id: "projects-cyberpunk-2077",
          title: 'Cyberpunk 2077',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cyberpunk2077/";
            },},{id: "projects-death-stranding",
          title: 'Death Stranding',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deathstranding/";
            },},{id: "projects-elden-ring",
          title: 'Elden Ring',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eldenring/";
            },},{id: "projects-final-fantasy-vii",
          title: 'Final Fantasy VII',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ff7remake/";
            },},{id: "projects-germany",
          title: 'Germany 🇩🇪',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/germany/";
            },},{id: "projects-unitree-go1",
          title: 'Unitree Go1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go1/";
            },},{id: "projects-unitree-go2",
          title: 'Unitree Go2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go2/";
            },},{id: "projects-god-of-war",
          title: 'God of War',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gow4/";
            },},{id: "projects-horizon",
          title: 'Horizon',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/horizonzd/";
            },},{id: "projects-japan",
          title: 'Japan 🇯🇵',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/japan/";
            },},{id: "projects-japan2",
          title: 'Japan2 🇯🇵',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/japan2/";
            },},{id: "projects-lijiang",
          title: 'Lijiang 🇨🇳',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lijiang/";
            },},{id: "projects-milan",
          title: 'Milan 🇮🇹',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/milan/";
            },},{id: "projects-nier-automata",
          title: 'Nier Automata',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nierautomata/";
            },},{id: "projects-nier-replicant",
          title: 'Nier Replicant',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nierreplicant/";
            },},{id: "projects-random",
          title: 'Random 🔀',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/random/";
            },},{id: "projects-sekiro-shadows-die-twice",
          title: 'Sekiro Shadows Die Twice',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sekiro/";
            },},{id: "projects-supermegabot",
          title: 'SuperMegaBot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smb/";
            },},{id: "projects-solo12",
          title: 'SOLO12',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/solo12/";
            },},{id: "projects-spot",
          title: 'Spot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spot/";
            },},{id: "projects-switzerland",
          title: 'Switzerland 🇨🇭',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/switzerland/";
            },},{id: "projects-turkey",
          title: 'Turkey 🇹🇷',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/turkey/";
            },},{id: "projects-the-legend-of-zelda",
          title: 'The Legend of Zelda',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zelda/";
            },},{id: "projects-zürich",
          title: 'Zürich 🇨🇭',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zurich/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6E-%63%68%65%6E%67@%69%6E%66.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/catachiii", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jin-cheng-886462163", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jHsJrX8AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/catachiii", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
