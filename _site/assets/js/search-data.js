// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/mysite/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mysite/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mysite/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mysite/resume/";
          },
        },{id: "post-neurips-2025-san-diego",
        
          title: "NeurIPS 2025 San Diego",
        
        description: "field notes ...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mysite/blog/2025/neurips/";
          
        },
      },{id: "post-reflections-on-ucsc",
        
          title: "Reflections on UCSC",
        
        description: "UCSC Campus",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mysite/blog/2025/ucsc-visit/";
          
        },
      },{id: "post-agi-builders-meetup-sfo",
        
          title: "AGI Builders Meetup SFO",
        
        description: "field notes ...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/mysite/blog/2025/agi-meetup/";
          
        },
      },{
        id: 'social-cv_pdf',
        title: 'Cv_pdf',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%61%6E%61%76%67%75%68%61%74%68%61%6B%75%72%74%61 @ %67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pranavgt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pranavguhathakurta", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/mysite/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/_pranavgt", "_blank");
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
