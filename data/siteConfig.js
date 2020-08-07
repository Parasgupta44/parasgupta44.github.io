module.exports = {
  siteTitle: "Hi! I'm Paras!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Paras Gupta',
  twitterUsername: 'Paras986745',
  githubUsername: 'Parasgupta44',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `4th year Undergrad student at Punjab Engineering College, Chandigarh. Majoring in <strong>Computer Science</strong>.<br />
    Interned with Goldman Sachs, Bangalore from Jan 2020 to June 2020 as a Software Developer. <br />`,
  skills: [
    {
      name: 'C/C++',
      level: 70,
    },
    {
      name: 'Python',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'TypeScript',
      level: 40,
    },
    {
      name: 'ReactJS',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Goldman Sachs',
      begin: {
        month: 'jan',
        year: '2020',
      },
      duration: '6 months',
      occupation: 'Software Developer Intern',
      description:
        'Was part of the Corporate Treasury team working on a live project invloving technologies like React, Flask, and FastApi.',
    },
    {
      company: 'Punjab Engineering College, Chandigarh',
      begin: {
        month: 'aug',
        year: '2017',
      },
      duration: null,
      occupation: '4th year Undergrad',
      description: 'Pursuing B.Tech in Computer Science.',
    },
    // {
    //   company: 'Anapro',
    //   begin: {
    //     month: 'dec',
    //     year: '2016',
    //   },
    //   duration: '1 yr e 5 mos',
    //   occupation: 'Fullstack developer',
    //   description:
    //     'Development and maintenance, corrective and preventive, of web applications for the real estate market.',
    // },
    // {
    //   company: 'Anapro',
    //   begin: {
    //     month: 'set',
    //     year: '2012',
    //   },
    //   duration: '4 yrs e 3 mos',
    //   occupation: 'Support Technician',
    //   description:
    //     'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
    // },
  ],
  portifolio: [
    // {
    //   image: '/images/gatsby-starter-cv.png',
    //   description: 'Gatsby starter CV template',
    //   url:
    //     'https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/',
    // },
    // {
    //   image: '/images/awesome-grid.png',
    //   description: 'Responsive grid for ReactJS',
    //   url: 'https://github.com/santosfrancisco/react-awesome-styled-grid',
    // },
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/Paras986745',
    linkedin: 'https://in.linkedin.com/in/paras-gupta-41508215a',
    github: 'https://github.com/Parasgupta44',
    email: 'paras.gupta986745@gmail.com',
  },
  siteUrl: 'https://guptaparas.in',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio(WIP)',
      url: '/portifolio',
    },
    {
      label: 'Blog(WIP)',
      url: '/blogIndex',
    },
  ],
}
