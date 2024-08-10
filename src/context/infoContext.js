import { createContext, useContext } from "react";

const infoStateContext = createContext();

export const useInfoContext = () => useContext(infoStateContext);

export const InfoProvider = ({ children }) => {
  const aboutMe = {
    name: "Ajinkya Bansode",
    aboutPara: [
      "I am a Web Developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software. I enjoy tuning complex problems into simple, beautiful and intuitive designs.",
      "My aim is to bring across your message and identity in the most creative way.",
    ],
    aboutMeLabels: {
      Skills: [
        "web developer",
        "front end developer",
        "React.js Developer",
        "HTML/CSS",
        "JavaScript",
        "BootStrap",
        "Microsoft SQL",
      ],
      Experience: [
        "Six months of internship as Front-end Developer in SkillUp It Academy",
        "3 years ofexperience in front end developer, Worked on projects related to education department student details data base loginpage.",
        "Managed skill Up IT Academy website along with worked on few other projects such as E-learning Website.",
        "Currently working as a React Developer at Apprication Pvt. Ltd. on the project Quickvee, an e-commerce platform. My role involves developing both the customer-facing website and an admin site that manages a comprehensive set of features, including customer data, orders, tables, stocktake, purchase orders, products, merchants, managers, and stores.",
      ],
      Education: [
        "SSC from Gurukul Vidyalay",
        "HSC from Lord's College Malad",
        "BSc. Computer Sciecece from Bhavans College Andheri",
      ],
    },
    mySkills: [
      { skillName: "React Js", percentage: 80 },
      { skillName: "JavaScript", percentage: 80 },
      { skillName: "Bootstrap", percentage: 90 },
      { skillName: "CSS", percentage: 70 },
      { skillName: "HTML", percentage: 80 },
    ],
    professionalSkills1: [
      { name: "Problem Solving", percentage: 75 },
      { name: "Team Work", percentage: 85 },
      { name: "Time Managenent", percentage: 80 },
      { name: "Creativity", percentage: 75 },
    ],

    webDeveloperSkills: [
      {
        category: "Web Design",
        skills: [
          { name: "Responsive and mobile-first design" },
          { name: "User interface (UI) design principles" },
          { name: "Prototyping and wireframing" },
        ],
        img: "web_developement",
      },
      {
        category: "HTML, CSS, and JavaScript",
        skills: [
          { name: "Proficiency in HTML5 and semantic markup" },
          {
            name: "CSS for styling (including preprocessors like Sass or Less)",
          },
          {
            name: "Strong understanding of JavaScript for interactivity and dynamic content",
          },
        ],
        img: "HtmlCssJavaScript",
      },
      {
        category: "Frameworks and Libraries",
        skills: [
          {
            name: "Familiarity with front-end frameworks such as React.js, Angular, or Vue.js",
          },
          { name: "Knowledge of popular JavaScript libraries and tools" },
        ],
        img: "libraries",
      },
      {
        category: "Responsive Web Development",
        skills: [
          {
            name: "Creating websites that work seamlessly across various devices and screen sizes",
          },
          { name: "Media queries and flexible grid systems" },
        ],
        img: "responsive_web_developement",
      },
      {
        category: "Cross-Browser Compatibility",
        skills: [
          {
            name: "Ensuring that websites function consistently across different web browsers",
          },
        ],
        img: "Cross-Browser-Compatibility",
      },
      {
        category: "Front-End Build Tools",
        skills: [
          { name: "Experience with build tools like Webpack, Gulp, or Grunt" },
          { name: "Task automation for optimizing assets and code" },
        ],
        img: "front_end_tools",
      },
      {
        category: "Version Control",
        skills: [{ name: "Using Git for version control and collaboration" }],
        img: "Version_Control",
      },
      {
        category: "Web Performance Optimization",
        skills: [
          { name: "Optimizing website performance for faster loading times" },
          { name: "Minification and compression of assets" },
        ],
        img: "Web_Performance_Optimization",
      },
      {
        category: "AJAX and API Integration",
        skills: [
          { name: "Fetching data from APIs using AJAX" },
          { name: "Integrating external APIs into web applications" },
        ],
        img: "Ajax_api_integration",
      },
      {
        category: "Web Accessibility",
        skills: [
          {
            name: "Ensuring websites are accessible to users with disabilities",
          },
          {
            name: "Compliance with WCAG (Web Content Accessibility Guidelines)",
          },
        ],
        img: "web_accessibility",
      },
      {
        category: "Testing and Debugging",
        skills: [
          { name: "Writing unit tests for front-end code" },
          { name: "Debugging and troubleshooting issues" },
        ],
        img: "Testing_Debugging",
      },
      {
        category: "Responsive Design Frameworks",
        skills: [
          {
            name: "Experience with popular CSS frameworks like Bootstrap or Tailwind CSS",
          },
        ],
        img: "cssFramework",
      },
      {
        category: "Animation and Interactivity",
        skills: [
          { name: "Implementing animations using CSS or JavaScript libraries" },
          { name: "Creating engaging user interactions" },
        ],
        img: "Animation",
      },
      {
        category: "Progressive Web Apps (PWAs)",
        skills: [
          {
            name: "Building progressive web applications for enhanced user experiences",
          },
        ],
        img: "Progressive_web_app",
      },
      {
        category: "Collaboration and Communication",
        skills: [
          {
            name: "Working closely with designers, back-end developers, and other stakeholders",
          },
          {
            name: "Effective communication of technical concepts to non-technical team members",
          },
        ],
        img: "Collaboration_and_Communication",
      },
    ],

    Portfolio: [
      {
        projectName: "Quickvee",
        projectDescription: [
          {
            para: "Quickvee is a comprehensive e-commerce platform designed to provide users with a seamless online shopping experience.",
          },
          {
            para: " Upon selecting a product, users can view detailed descriptions and related products, making it easier to find what they need.",
          },
          {
            para: "Key functionalities include an intuitive 'Add to Cart' feature, a user profile section where customers can manage their personal information, and access to their purchase history. The app also provides real-time updates on the status of their orders, including pickup and delivery details, ensuring a smooth and transparent shopping experience.",
          },
        ],
        image: "Quickvee",
        projectLink: "E-Learning-Website",
      },
      {
        projectName: "SkillUp IT Academy",
        projectDescription: [
          {
            para: "Employed optimization techniques to enhance the website's performance and reduce loading times.",
          },
          {
            para: "Tested and ensured cross-browser compatibility to guarantee a consistent experience across different web browsers.",
          },
          {
            para: "Ensured a responsive design to provide a consistent experience across various devices, including desktops, tablets, and mobile phones.",
          },
        ],
        image: "SkillUp-IT-Academy-An-IT-Training-Institute",
        projectLink: "E-Learning-Website",
      },
      {
        projectName: "MovieDb",
        projectDescription: [
          { para: "Serves as a comprehensive movie information platform" },
          {
            para: "The project aims to provide users with an intuitive interface to explore and search for details about various movies.",
          },
          { para: "Tech Stack: Redux Toolkit, React Router API fetching" },
        ],
        image: "MovieDb",
        projectLink: "E-Learning-Website",
      },
      {
        projectName: "E-learning Website",
        projectDescription: [
          {
            para: "Developed a visually appealing and intuitive user interface to facilitate easy navigation for learners.",
          },
          {
            para: "Ensured a responsive design to provide a consistent experience across various devices, including desktops, tablets, and mobile phones.",
          },
        ],
        image: "E-Learning-Website",
        projectLink: "E-Learning-Website",
      },
      {
        projectName: "C++ Exam Model",
        projectDescription: [
          {
            para: "Created a multiple-choice question (MCQ) exam model in React involves designing a user interface that presents questions and answer options.",
          },
          {
            para: "Handling user interactions, and implementing logic to evaluate and score responses.",
          },
        ],
        image: "C++_Exam_Model",
        projectLink: "E-Learning-Website",
      },
    ],
  };

  return (
    <infoStateContext.Provider value={{ aboutMe }}>
      {children}
    </infoStateContext.Provider>
  );
};
