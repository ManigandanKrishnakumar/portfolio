export const PROJECT_CATAGORY = {
  MOBILE: 'mobile',
  WEB: 'web',
  HYBRID: 'hybrid'
};
export const PROJECTS = {
  CLIENT_PROJECTS: [{
    ID: 1,
    ICON: 
    {
      NAME: 'IoMdPhonePortrait',
      FAMILY: 'io',
    },
    NAME: 'Cab Fleet Manager',
    TECH_STACK: 'ReactNative, NodeJs, SQL, Google Maps API',
    CATAGORY: PROJECT_CATAGORY.MOBILE,
    DESC: `Cross-Platform mobile application for a multinational digital consulting company to maintain cab fleet management. The application helps to
    automate and simplify the Admin operations with our easy-to-use interface and our algorithm to optimise cab and route allocation.`,
    IMAGES: [] 
  },
  {
    ID: 2,
    ICON: 
    {
      NAME: 'MdDevices',
      FAMILY: 'md',
    },
    NAME: 'Sales Dashboard and Analytics',
    TECH_STACK: 'ReactNative, NodeJs, IBM DB2, Ionic',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: 'Hybrid Mobile Application for a large technology company to maintain their global sales analytics. The application helps the client to plan their strategy across different business and regions in a better way by representing all the data in a simplified visual format  Architected the solution for the core modules such as profile and performance optimisation.',
    IMAGES: []  
  },
  {
    ID: 3,
    ICON: 
    {
      NAME: 'MdDevices',
      FAMILY: 'md',
    },
    NAME: 'E-Commerce Application',
    TECH_STACK: 'Ionic, Angular, AWS Lambda, AppSync',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: 'Hybrid mobile application for a US based cutlery selling company to ease the work of Sales Representatives by providing e-commerce like mobile application as well as web application. Provided solution with server less architecture and  along with other modules provided solution for handling large images data offline on online without compromising performance.',
    IMAGES: []  
  },
  {
    ID: 4,
    ICON: 
    {
      NAME: 'MdDevices',
      FAMILY: 'md',
    },
    NAME: 'Hyperlocal logistics App',
    TECH_STACK: 'Ionic, Angular, NodeJs, MongoDB, AWS -RDS',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: `Cross-Platform mobile application that enables people to connect with local vendors from various categories of sales and services and get access to all kinds of consumer products with in hours. I have worked as chief technical engineer and product manager in this project.`,
    IMAGES: []  
  },
  {
    ID: 5,
    ICON: 
    {
      NAME: 'MdWeb',
      FAMILY: 'md',
    },
    NAME: 'CMS Testing Tool',
    TECH_STACK: 'Java, SpringBoot, Jsoup, Selinium (Java)',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: `Application to automate the testing of content migration projects for example from Salesforce to Adobe Experience Manager and various combinations.`,
    IMAGES: []  
  },
  {
    ID: 6,
    ICON: 
    {
      NAME: 'MdWeb',
      FAMILY: 'md',
    },
    NAME: 'LogBook',
    TECH_STACK: 'J2EE, Spring 4, MongoDB',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: `Single page application development for a multinational digital consulting company to maintain Admin work with dashboard. The application helps to automate and simplify the admin operations with our easy-to-use interface.`,
    IMAGES: []  
  }
],
OPEN_SOURCE: [
  {
    ID: 3,
    ICON: 
    {
      NAME: 'IoMdPhonePortrait',
      FAMILY: 'io',
    },
    NAME: 'Clothes Store',
    TECH_STACK: 'ReactNative',
    DESC: 'Implementation of UI design for a E-commerce Clothes store mobile app using ReactNative with mock data. It includes implementation of simple cart functionality of cart functionality using context and react navigation version 5. This could serve as simple starting for a simple small e-commerce projects.',
    CATAGORY: PROJECT_CATAGORY.MOBILE,
    REPO: 'https://github.com/ManigandanKrishnakumar/ClothesStoreUI',
    IMAGES: [
      'https://i.ibb.co/TmwVtM9/Home.png',
      'https://i.ibb.co/2YcrYyd/Product-Details.png'
    ]  
  },
  {
    ID: 7,
    ICON: 
      {
        NAME: 'SiNpm',
        FAMILY: 'si',
      },
    NAME: 'Devtools Monitor',
    TECH_STACK: 'Javascript',
    CATAGORY: PROJECT_CATAGORY.HYBRID,
    DESC: `An NPM package which can be used with any Javascript frameworks such as Angular, React, Vue, Vanilla JS to detect developer console is Opened or listen for opening of the developer console.`,
    REPO: 'https://github.com/ManigandanKrishnakumar/dev-tools-detector',
    NPM: 'https://www.npmjs.com/package/dev-tools-monitor',
    IMAGES: [],
  },
  {
    ID: 4,
    ICON: 
    {
      NAME: 'IoMdPhonePortrait',
      FAMILY: 'io',
    },
    NAME: 'Manager App',
    TECH_STACK: 'ReactNative',
    DESC: 'Implementation of UI design for a Manager App who can manage various teams and their projects and tasks. It has role based screens like Software team manager and Admin Team manager. This project also has animations with SVG and Vector Icons Configured along with custom Tab Bar.',
    CATAGORY: PROJECT_CATAGORY.MOBILE,
    REPO: 'https://github.com/ManigandanKrishnakumar/ManagerAppUI',
    IMAGES: [
      'https://i.ibb.co/MVckrCw/login.png',
      'https://i.ibb.co/2hrKGWd/home.png',
      'https://i.ibb.co/W33k51D/task-long-press.png ',    
      'https://i.ibb.co/GtYCJjY/employee-profile.png' 
    ]
  },
  {
    ID: 5,
    ICON: 
    {
      NAME: 'IoMdPhonePortrait',
      FAMILY: 'io',
    },
    NAME: 'Recipe App',
    TECH_STACK: 'ReactNative, Redux, Redux Thunk',
    DESC: 'Implementation of UI design for a Recipie App where one can search for a recipe based on the ingredients and sort them by popularity/difficulty/time. And one can also look for trending recipies and save the recipies they like in offline.',
    CATAGORY: PROJECT_CATAGORY.MOBILE,
    REPO: 'https://github.com/ManigandanKrishnakumar/RecipeAppUI',
    IMAGES: [
      'https://i.ibb.co/NrmGMN0/Recipe-app-1.png',
      'https://i.ibb.co/bKVM53T/Recipe-app-2.png',
      'https://i.ibb.co/PQpQztr/Recipe-app-4.png',
      'https://i.ibb.co/bXkpjK5/Recipe-app-5.png',
      'https://i.ibb.co/7ptTDJW/Recipe-app-7.png',
      'https://i.ibb.co/gPmSJRs/Recipe-app-8.png',
    ]
  },
  {
    ID: 1,
    ICON: 
      {
        NAME: 'MdWeb',
        FAMILY: 'md',
      },
    NAME: 'Point of Sale System',
    TECH_STACK: 'React, Node.js, SQL',
    CATAGORY: PROJECT_CATAGORY.WEB,
    DESC: `A web based project which is POS system for small scale vendors and larger ones. It includes different modules such as Billing,
    Inventory Management, Customer Acquisition with data and analytics, Sales Analytics and growing. I worked as Chief Technical Engineer and 
    Product Manager of this project.`,
    REPO: 'https://github.com/ManigandanKrishnakumar/point-of-sale-system',
    IMAGES: [
      'https://i.ibb.co/Pm7fmQT/1.png',
      'https://i.ibb.co/kmK0BzD/2.png',
      'https://i.ibb.co/JC80vT9/3.png',
      'https://i.ibb.co/prx6SGd/4.png',
      'https://i.ibb.co/XX6wSqg/5.png',
      'https://i.ibb.co/N1PjH6y/6.png',
      'https://i.ibb.co/7Rkp4dc/7.png'
    ],
  },
  {
    ID: 2,
    ICON: 
    {
      NAME: 'MdWeb',
      FAMILY: 'md',
    },
    NAME: 'React Theming Starter',
    TECH_STACK: 'React, StyledComponents',
    DESC: 'This is boiler plate started for theming the react application which includes the best practices to be followed so that the code can be scaled. This project is already configured with four themes. To add new themes just a new theme.js files with colors and required keys.',
    CATAGORY: PROJECT_CATAGORY.WEB,
    REPO: 'https://github.com/ManigandanKrishnakumar/react-theming-boilerplate',
    DEMO: 'https://manigandankrishnakumar.github.io/react-theming-boilerplate/',
    IMAGES: [
      'https://i.ibb.co/pbr2Xkp/1.png',
      'https://i.ibb.co/58YcvnL/2.png',
      'https://i.ibb.co/wRshLbw/3.png',
      'https://i.ibb.co/qRFTjP8/4.png'
    ]  
  },
  
  {
    ID: 6,
    ICON: 
    {
      NAME: 'MdWeb',
      FAMILY: 'md',
    },
    NAME: 'Portfolio',
    TECH_STACK: 'React',
    DESC: 'This is a portfolio site which was designed and developed by me using react.',
    CATAGORY: PROJECT_CATAGORY.WEB,
    REPO: 'https://github.com/ManigandanKrishnakumar/portfolio',
    IMAGES: []  
  }
]
};

