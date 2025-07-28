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
        },{id: "news-i-started-my-bachelor-in-vehicle-engineering-at-department-of-automotive-engineering-tsinghua-university-beijing-china",
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
          section: "News",},{id: "news-i-am-very-delighted-to-share-my-collaboration-work-with-robot-intelligence-lab-rilab-at-korea-university-spatio-temporal-motion-retargeting-for-quadruped-robots-has-been-accepted-for-publication-in-ieee-transactions-on-robotics-t-ro",
          title: '📑 I am very delighted to share my collaboration work with Robot Intelligence...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-share-my-recent-work-from-computational-robotics-lab-rambo-rl-augmented-model-based-whole-body-control-for-loco-manipulation-has-been-accepted-for-publication-to-the-ieee-robotics-and-automation-letters-ra-l-journal-please-check-our-website-for-more-details",
          title: '📑 I am delighted to share my recent work from Computational Robotics Lab,...',
          description: "",
          section: "News",},{
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
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@jincheng5662", "_blank");
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
