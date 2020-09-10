module.exports = {
  siteTitle: 'Hey, Welcome!',
  siteDescription: `Create your online curriculum in just a few minutes with this template`,
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
      level: 55,
    },
    {
      name: 'Git',
      level: 50,
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
        'Was part of the Corporate Treasury team. Worked on a project from scratch invloving technologies like React, Flask, and FastApi. DevOps cycle was followed to continuously push the builds to the servers.',
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
  ],
  portifolio: [
    {
      image: '/images/Resume_SS.PNG',
      description: 'Resume - Paras Gupta',
      url:
        'https://drive.google.com/file/d/1xoj1ZCkKUoYqGcwqfh9rtA4om8p__2_L/view?usp=sharing',
    },
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
      label: 'Portfolio',
      url: '/portifolio',
    },
    {
      label: 'Blog',
      url: '/blogIndex',
    },
  ],
}
