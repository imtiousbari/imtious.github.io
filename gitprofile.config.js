// gitprofile.config.js

const config = {
  github: {
    username: 'imtiousbari', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['imtious.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'alexis-japas',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'alexis.japas.dev@pm.me',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'GNU/Linux',
    'Windows',
    'Git',
    'Docker',
    'Python',
    'C',
    'C++',
    'MATLAB',
    'Scala',
    'Pytorch'
  ],
  experiences: [
    {
      company: 'Safran Electronics & Defense',
      position: 'Image processing engineer apprentice',
      from: 'September 2020',
      to: 'August 2023',
      companyLink: 'https://www.safran-group.com/fr/societes/safran-electronics-defense',
    },
    {
      company: 'Politecnico di Milano',
      position: 'Data processing intern',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://www.polimi.it',
    },
    {
      company: 'EEAP Coste-Rousse',
      position: 'Android developer intern',
      from: 'June 2019',
      to: 'August 2019',
      companyLink: 'https://www.adages.net/costerousse',
    },
    {
      company: 'SERMA Technologies',
      position: 'Laboratory technician',
      from: 'April 2018',
      to: 'August 2018',
      companyLink: 'https://www.serma-technologies.com',
    },
    {
      company: 'ISTerre',
      position: 'Signal processing intern',
      from: 'November 2017',
      to: 'February 2018',
      companyLink: 'https://www.isterre.fr',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'CYTech (ex-EISTI)',
      degree: 'Engineering: Mathematics/Computer Science - Artificial Intelligence',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Lycée André Argouges',
      degree: 'CPGE ATS: Engineering Science',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Université Grenoble Alpes',
      degree: 'DUT: Computer Science',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Université Grenoble Alpes',
      degree: 'DUT: Applied Physics',
      from: '2015',
      to: '2018',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
  /*{
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    }*/
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },*/
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
