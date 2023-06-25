module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jiayaosu.github.io',
  title: 'Jiayao Su',
  description: 'Personal Website of Jiayao Su',
  author: 'Jiayao Su',
  authorAlternative: '苏家瑶',
  introduction: [
    'Hi there, I am Jiayao (Vanessa) Su. Currently, I\'m a Software Engineer Intern [@Google](https://about.google) and I\'m a Master\'s student studying Computer Science [@University of Michigan](https://umich.edu).',
  ],
  avatar: 'avatar.jpeg',
  professions: ['Google Intern', 'CS Master\'s Student'],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  // birthday: 'Mar. 16, 2000',
  location: 'Boston, MA',
  email: 'sujiayao@umich.edu',
  language: 'English, 中文',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript:
    // process.env.DISQUS_SCRIPT || 'https://boyanzh.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    project: 'project',
    wakatime: 'wakatime',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    },
    {
      url: 'https://github.com/jiayaosu',
      icon: ['fab', 'github'],
    },
    // {
    //   url: 'https://twitter.com/BoYanZh233',
    //   icon: ['fab', 'twitter'],
    // },
    // {
    //   url: 'https://t.me/BoYanZh',
    //   icon: ['fab', 'telegram'],
    // },
    {
      url: 'https://www.linkedin.com/in/jiayao-su-6296421a8/',
      icon: ['fab', 'linkedin'],
    },
    // {
    //   url: 'https://steamcommunity.com/id/boyanzh',
    //   icon: ['fab', 'steam'],
    // },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'boyanzh',
  //   activity: '8ec8868a-3e3b-4d1d-845f-b1ba0a474e72',
  //   language: '910c9181-965c-4d66-a371-c5d9ffeafbac',
  //   editor: '489d2fc7-aa89-4984-af24-17115132d603',
  //   os: '84d9c631-f6c1-4553-a0cc-cc3634936846',
  // },
  // contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  // googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
  // leave this for surpressing error, use `school`
  education: [{
    date: '',
    icon: '',
    title: '',
    location: '',
  }],
  job: [
    {
      date: '2023.6 - 2023.8',
      icon: 'google.png',
      title: 'Google',
      location: 'Software Engineer Intern',
    },
    {
      date: '2023.1 - 2023.6',
      icon: 'UMich.jpg',
      title: 'University of Michigan College of Engineering',
      location: 'Programming Paradigms course (EECS390) Graduate Student Instructor',
    },
    {
      date: '2023.1 - 2023.6',
      icon: 'UMich.jpg',
      title: 'University of Michigan Robotics Department',
      location: 'Introduction to Robotics course (EECS367) Graduate Student Instructor',
    },
    {
      date: '2022.8 - 2023.1',
      icon: 'UMich.jpg',
      title: 'University of Michigan College of Engineering',
      location: 'Operating System Course(EECS482) Instructional Aid',
    },
    {
      date: '2022.5 - 2022.8',
      icon: 'salesforce.jpeg',
      title: 'Salesforce',
      location: 'Software Engineer Intern',
    },
    {
      date: '2021.5 - 2022.7',
      icon: 'CAEN.png',
      title: 'University of Michigan CAEN IT Department',
      location: 'Web Developer',
    },
    {
      date: '2021.5 - 2022.7',
      icon: 'ISCL.png',
      title: 'University of Michigan EECS Department Interactive, Sensing, and Computing Lab',
      location: 'Research Assistant',
    }
  ],
  school: [
    {
      date: '2023 - 2024 (expected)',
      icon: 'UMich.jpg',
      title: 'M.Sc. in Computer Science',
      location: 'University of Michigan',
    },
    {
      date: '2019 - 2023',
      icon: 'UMich.jpg',
      title: 'B.S.E. in Computer Science and Electrical Engineering',
      location: 'University of Michigan',
    },
    {
      date: '2016 - 2019',
      icon: 'cranbrook.png',
      title: 'High School Diploma',
      location: 'Cranbrook Schools',
    }
  ],
  interests: [
    {
      icon: 'layer-group',
      title: 'Full Stack Development',
    },
    {
      icon: 'infinity',
      title: 'DevOps',
    },
    {
      icon: ['fab', 'docker'],
      title: 'Container Technology',
    },
    {
      icon: ['fab', 'linux'],
      title: 'Open Source Community',
    },
  ],
  experience: [
    {
      title: 'Job',
      position: 'left',
      data: [
        {
          date: 'Nov. 2022 - Present',
          title: 'Software Engineer',
          location: 'Naive Systems',
          description: 'Build a code analyzer and related DevSecOps products.',
        },
        {
          date: 'Feb. 2022 - Jul. 2022',
          title: 'Software Engineer Intern',
          location: 'Naive Systems',
          description: 'Build a code analyzer and related DevSecOps products.',
        },
        {
          date: 'June 2021 - Feb. 2022',
          title: 'Research & Development Engineer Intern',
          location: 'Shanghai Zhimian Weiye Technology Co., Ltd.',
          description: 'Full-stack development engineer, technical leader.',
        }
      ],
    },
    {
      title: 'Teaching Assistant',
      position: 'right',
      data: [
        {
          date: 'Sept. 2021 - Dec. 2021',
          title: 'Teaching Assistant of Intro to OS',
          location: 'Shanghai Jiao Tong University',
          description: 'Advisor: Prof. Manuel Charlemagne'
        },
        {
          date: 'Sept. 2020 - Dec. 2020',
          title: 'Teaching Assistant of Intro to Comp.',
          location: 'Shanghai Jiao Tong University',
          description: 'Advisor: Prof. Manuel Charlemagne'
        },
      ],
    },
    {
      title: 'Laboratory',
      position: 'left',
      data: [
        {
          date: 'Mar. 2021 - Feb. 2022',
          title: 'Research Assistant',
          location: 'Intelligent Design and Optimization Research Lab',
          description: 'Advisor: Prof. Mian Li'
        },
        {
          date: 'July 2021 - Sept. 2021',
          title: 'Website Developer',
          location: 'Advanced Network Laboratory',
          description: 'Advisor: Prof. Xiaofeng Gao'
        },
        {
          date: 'March 2019 - Dec. 2019',
          title: 'Research Assistant',
          location: 'Institute of Media, Information, and Network',
          description: 'Advisor: Prof. Weiyao Lin'
        },
      ],
    },
    {
      title: 'Student Organization',
      position: 'right',
      data: [
        {
          date: 'Sept. 2019 - Present',
          title: 'Maintainer, Main Contributor',
          location: 'Fans Of Computer Science',
        },
        {
          date: 'Sept. 2018 - July 2019',
          title: 'Deputy Director',
          location:
            'Technology Department UM-SJTU Joint Institute Student Union',
        },
        {
          date: 'Sept. 2019 - July 2020',
          title: 'Member',
          location: 'Student Science, Technology and Innovation Association',
        },
      ],
    },
    {
      title: 'Coursework',
      position: 'right',
      data: [
        {
          date: 'VE482',
          location: 'Intro to Operating Systems (A+)',
        },
        {
          date: 'VE472',
          location: 'Methods and Tools for big data (A+)',
        },
        {
          date: 'VE281',
          location: 'Data Structures and Algorithms (A)',
        },
        {
          date: 'VE280',
          location: 'Programming and Elem. Data Structures (A+)',
        },
        {
          date: 'VE450',
          location: 'Major Design Experience (A)',
        },
        {
          date: 'VE490',
          location: 'Undergraduate Research (A)',
        },
        {
          date: 'VG101',
          location: 'Intro to Computers and Programming (A+)',
        },
        {
          date: 'VG100',
          location: 'Intro to Engineering (A)',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Aug. 2022',
      title: 'Honors Research Program in the Undergraduate Research Course'
    },
    {
      date: 'Nov. 2021',
      title: '2020-2021 Undergraduate Excellent Scholarship',
    },
    {
      date: 'June 2019',
      title:
        'Outstanding Member of Technology Department UM-SJTU Joint Institute Student Union',
    },
  ],
  tagColors: [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description:
        'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description:
        'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description:
        'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description:
        'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
