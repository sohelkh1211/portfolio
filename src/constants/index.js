import vscode from '../assets/vscode.png';
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactjs from '../assets/reactjs.png'
import tailwind from '../assets/tailwind.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import threejs from '../assets/threejs.svg';
import sql from '../assets/sql.png';
import tensorflow from '../assets/tensorflow.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';



export const navLinks = [
    {
      id: "about",
      title: "about",
    },
    {
      id: "work",
      title: "work",
    },
    {
      id: "tech",
      title: "tech",
    },
  ];

  export const experience = [
    {
      title: "Python Programming",
      points: [
        "Solved coding-related problems from platforms like codechef, hackerrank & leetcode.",
        "Developed & deployed a House Price Prediction model using the python language.",
        "Additionally, did implementation of various data Structures using python language."
      ],
      buttons: [
        "Codechef",
        "Hackerrank",
        "Leetcode"
      ]
    },
    {
      title: "Web Dev",
      points: [
        "I have honed my skills in creating dynamic and visually appealing websites.",
        "With a deep understanding of HTML, CSS, and JavaScript, I can effectively translate design concepts into functional and responsive web pages.",
        "I am well-versed in front-end frameworks like Reactjs."
      ],
      buttons: [
        "Reactjs",
        "Tailwindcss",
        "MongoDB"
      ]
    },
    {
      title: "Machine learning",
      points: [
        "Learned about the steps to develop different Machine learning models like Linear & Multilinear regression, Random forest, Decission tree, SVM & many more.",
        "Succesfully developed & deployed Regression model using streamlit app.",
        "I would like to make my career in this domain because it deals with mathematics & complex data."
      ],
      buttons: [
        "Linear reg",
        "Decision tree",
        "Random forest"
      ]
    },
    {
      title: "Data Science",
      points: [
        "I learned popular libraries and frameworks such as NumPy, Pandas, and scikit-learn to preprocess, analyze, and model data effectively.",
        "Additionally, I have hands-on experience in developing and deploying predictive models using techniques like regression, classification, and clustering.",
        "Furthermore, my proficiency in data visualization tools like Tableau and matplotlib allows me to communicate findings in a visually compelling manner."
      ],
      buttons: [
        "Numpy",
        "Pandas",
        "Matplotlib"
      ]
    },
  ]

  export const contact = [
    {
      id: "mail",
      name: "Sohel Khan",
      link: "mailto:khansohailabdussalam207@gmail.com"
    },
    {
      id: "git",
      name: "sohelkh1211",
      link: "https://github.com/sohelkh1211"
    },
    {
      id: "linkedin",
      name: "Khan Sohel",
      link: "https://www.linkedin.com/in/mohammed-sohel-khan-452479259/"
    },
    {
      id: "Insta",
      name: "khan_sohel29",
      link: "https://instagram.com/khan_sohel29?igshid=Zm1scDA4MW9hZHVx"
    },
  ]

  export const TabTitle = ({ newtitle }) => {
    document.title = newtitle; 
  }

  export const technologies = [
    {
      name: "VS Code",
      icon: vscode,
      about: "A free, powerful, lightweight code editor for Windows, macOS and Linux."
    },
    {
      name: "Python",
      icon: python,
      about: "A Versatile, powerful language for building elegant solutions"
    },
    {
      name: "HTML 5",
      icon: html,
      about: "A markup language used for structuring content on the World Wide Web."
    },
    {
      name: "CSS 3",
      icon: css,
      about: "A style sheet language used for describing the presentation."
    },
    {
      name: "JavaScript",
      icon: javascript,
      about: "A lightweight interpreted just-in-time compiled programming language with first-class functions."
    },
    {
      name: "React JS",
      icon: reactjs,
      about: "A declarative JavaScript library for building efficient and scalable user interfaces."
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      about: "A utility-first CSS framework packed with classes that makes styling easy."
    },
    {
      name: "Node JS",
      icon: nodejs,
      about: "An open-source, cross-platform JavaScript runtime environment."
    },
    {
      name: "MongoDB",
      icon: mongodb,
      about: "An open-source and highly scalable No-SQL database management tool for big data storage and processing."
    },
    {
      name: "Three JS",
      icon: threejs,
      about: "A cross-browser JavaScript library and API used to create and display animated 3D computer graphics."
    },
    {
      name: "SQL",
      icon: sql,
      about: "A relatinal database management tool for efficiently storing, retrieving and managing relatinal data."
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
      about: "An end-to-end open source machine learning platform to develop and train ML & DL models."
    },
    {
      name: "GitHub",
      icon: github,
      about: "A collaborative platform for version control and code management."
    },
    {
      name: "Figma",
      icon: figma,
      about: "An intuitive design and prototyping tool for collaborative and efficient UI/UX creation."
    },
  ];

  export default {
    navLinks,
    experience,
    contact,
    technologies,
    TabTitle,
  };