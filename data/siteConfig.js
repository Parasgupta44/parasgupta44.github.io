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
  authorDescription: `Hi, I'm Paras ( पारस गुप्ता ). I am a fourth year undergraduate student at Punjab Engineering College, Chandigarh. Majoring in <strong>Computer Science</strong>. 
  I have Interned with Goldman Sachs, Bangalore from Jan 2020 to June 2020 as a Software Developer with the Corporate Treasury Team.<br />
   <strong>Interest areas: </strong> Deep Learning, Computer Vision, Web Development.`,
  skills: [
    {
      name: 'C/C++',
      level: 68,
    },
    {
      name: 'Python',
      level: 65,
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
        'Was part of the Corporate Treasury team. Worked on a full stack project from scratch invloving technologies like React JS, Redux JS, Flask, and FastApi. Continuous Integration, Deployment followed.',
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
        'https://drive.google.com/file/d/16EkRZkblK1FQDemQmFzSgkj8Jj2EnxJ9/view',
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/Paras986745',
    // linkedin: 'https://in.linkedin.com/in/paras-gupta-41508215a',
    linkedin: 'https://www.linkedin.com/in/parasgupta44/',
    github: 'https://github.com/Parasgupta44',
    email: 'paras.gupta986745@gmail.com',
    stackoverflow: 'https://stackoverflow.com/users/11745269/paras-gupta',
    resume:
      'https://drive.google.com/file/d/16EkRZkblK1FQDemQmFzSgkj8Jj2EnxJ9/view',
    dontClick: 'https://artpassions.net/dore/mariner.html',
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
      url: '/portifolio/',
    },
    {
      label: 'Blog',
      url: '/blogIndex/',
    },
  ],
  curr_intro_brief: `I am working as a Software Engineer at Goldman Sachs, India. I received my Bachelor's of Technology from Punjab Engineering College, Chandigarh with majors in Computer Science (cliched intro done right ?)`,
  curr_intro: `I also interned with Goldman Sachs, Bengaluru from Jan 2020 to June 2020 as a Software Developer with the Corporate Treasury Team. There, I worked on a full stack project from scratch involving technologies like React JS, Redux JS, Flask, Fast API etc combined with Data Science elements.`,
  interest_areas: `Web and Backend development, FinTech, Deep Learning, Computer Vision`,
  curr_work_area: `Currently working on Python Web Frameworks, ReactJS.`,
}
