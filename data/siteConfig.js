module.exports = {
  siteTitle: 'Paras Gupta',
  siteDescription: `Personal Portfolio / Blog of Paras Gupta.`,
  keyWords: [
    'gatsbyjs',
    'react',
    'paras',
    'portfolio',
    'resume',
    'blog',
    'Paras Gupta',
  ],
  authorName: 'Paras Gupta',
  twitterUsername: 'Paras986745',
  githubUsername: 'Parasgupta44',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Hi, I'm Paras ( पारस गुप्ता ). 4th year undergrad student at Punjab Engineering College, Chandigarh. Majoring in <strong>Computer Science</strong>. 
  Interned with Goldman Sachs, Bangalore from Jan 2020 to June 2020 as a Software Developer with the Corporate Treasury Team.<br />
   <strong>Interest areas: </strong> Deep Learning, Computer Vision, Web Development.`,
  skills: [
    {
      name: 'C/C++',
      level: 65,
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
      level: 55,
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
        'Was part of the Corporate Treasury team. Worked on a full stack project from scratch invloving technologies like React, Flask, and FastApi. Continuous Integration, Deployment followed.',
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
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/Paras986745',
    linkedin: 'https://in.linkedin.com/in/paras-gupta-41508215a',
    github: 'https://github.com/Parasgupta44',
    email: 'paras.gupta986745@gmail.com',
    stackoverflow: 'https://stackoverflow.com/users/11745269/paras-gupta',
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
