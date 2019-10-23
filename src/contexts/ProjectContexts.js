import React, { createContext } from "react";

import Fincoda from "./project-img/Fincoda.png";
import Fincoda1 from "./project-img/Fincoda/Fincoda1.PNG";
import Fincoda2 from "./project-img/Fincoda/Fincoda2.PNG";
import Fincoda3 from "./project-img/Fincoda/Fincoda3.PNG";
import Fincoda4 from "./project-img/Fincoda/Fincoda4.PNG";
import Fincoda5 from "./project-img/Fincoda/Fincoda5.PNG";

import advancedcss from "./project-img/advanced-css.PNG";
import advancedcss1 from "./project-img/advanced-css/advanced-css1.PNG";
import advancedcss2 from "./project-img/advanced-css/advanced-css2.PNG";
import advancedcss3 from "./project-img/advanced-css/advanced-css3.PNG";
import advancedcss4 from "./project-img/advanced-css/advanced-css4.PNG";

import ambassadornetwork from "./project-img/ambassadornetwork.PNG";
import ambassadornetwork2 from "./project-img/ambassadornetwork/ambassadornetwork2.PNG";
import ambassadornetwork3 from "./project-img/ambassadornetwork/ambassadornetwork3.PNG";
import ambassadornetwork4 from "./project-img/ambassadornetwork/ambassadornetwork4.PNG";
import ambassadornetwork5 from "./project-img/ambassadornetwork/ambassadornetwork5.PNG";

import Diary from "./project-img/diary2.PNG";
import diary1 from "./project-img/diary/diary1.PNG";
import diary2 from "./project-img/diary/diary2.PNG";
import diary3 from "./project-img/diary/diary3.PNG";
import diary4 from "./project-img/diary/diary4.PNG";

import Recipes from "./project-img/Recipes.PNG";
import recipes1 from "./project-img/recipes/recipes1.PNG";
import recipes2 from "./project-img/recipes/recipes2.PNG";
import recipes3 from "./project-img/recipes/recipes3.PNG";

import Shopping from "./project-img/shopping.PNG";
import shopping1 from "./project-img/shopping/shopping1.PNG";
import shopping2 from "./project-img/shopping/shopping2.PNG";
import shopping3 from "./project-img/shopping/shopping3.PNG";

import Todolist from "./project-img/Managing-Working.PNG";
import todolist1 from "./project-img/to-do-list/todolist1.PNG";
import todolist2 from "./project-img/to-do-list/todolist2.PNG";
import todolist3 from "./project-img/to-do-list/todolist3.PNG";

import Chatting from "./project-img/chatting1.PNG";
import Chatting2 from "./project-img/chatting/chatting2.PNG";

import drapdop from "./project-img/drap-drop.PNG";
import drapdop1 from "./project-img/drap-drop/drap-drop-1.PNG";
import drapdop2 from "./project-img/drap-drop/drap-drop-2.PNG";
import drapdop3 from "./project-img/drap-drop/drap-drop-3.PNG";

import gridcss1 from "./project-img/grid-css/grid-1.PNG";
import gridcss2 from "./project-img/grid-css/grid-2.PNG";
import gridcss3 from "./project-img/grid-css/grid-3.PNG";
import gridcss4 from "./project-img/grid-css/grid-4.PNG";
import gridcss5 from "./project-img/grid-css/grid-5.PNG";

import reacthook from "./project-img/react-hook.PNG";
import reacthook1 from "./project-img/react-hook/react-hook-1.PNG";
import reacthook2 from "./project-img/react-hook/react-hook-3.PNG";
import reacthook3 from "./project-img/react-hook/react-hook-4.PNG";
import reacthook4 from "./project-img/react-hook/react-hook-5.PNG";

import portfolio from "./project-img/portfolio.png";
import portfolio1 from "./project-img/portfolio/portfolio2.png";
import portfolio2 from "./project-img/portfolio/portfolio3.png";
import portfolio3 from "./project-img/portfolio/portfolio4.png";
import portfolio4 from "./project-img/portfolio/portfolio5.png";

export const ProjectContext = createContext();

const ProjectContexts = props => {
  const projectObject = [
    {
      name: "The Fincoda Project",
      img: Fincoda,
      skills: ["HTML", "CSS", "Bootstrap", "Jquery", "Mysql"],
      sourcecode: "",
      demo: "https://fincoda.dc.turkuamk.fi/",
      description: `I'm working at Front-end position in the Fincoda Project, the project's from my university which is Turku AMK
    The Fincoda Survey system is a tool for universities and other working life organizations 
    for measuring individuals’ innovation competencies.     
    `,
      photo: [Fincoda, Fincoda1, Fincoda2, Fincoda3, Fincoda4, Fincoda5]
    },
    {
      name: "The Recipes Project",
      img: Recipes,
      skills: ["HTML", "CSS", "Bootstrap", "Reactjs", "Redux"],
      sourcecode: "https://github.com/vinhphu101195/Phu-Chau-recipe",
      demo: "https://phuchaurecipe.herokuapp.com/",
      description: `It's the first project i used react and redux, there is Call API from "Food2Fork.com",
    You can input the food's name which you want to eat at the search bar, then it will show you how to cook it,
    what ingredients do you need to buy and time for cooking. You can like that recipe and add to the shopping list
    `,
      photo: [Recipes, recipes1, recipes2, recipes3]
    },
    {
      name: "The Diary Project",
      img: Diary,
      skills: ["HTML", "CSS", "Frirebase", "Reactjs", "Redux", "React Router"],
      sourcecode: "https://github.com/vinhphu101195/diary-react-redux-firebase",
      demo: "https://net-ninja-phuchau.herokuapp.com/signin",
      description: `React, Redux, React Router and Firebase are used in a project. There are authentication function and storing 
      data from Firebase. The user can sign up and sign in, then user can create a plan with the title and content.
    `,
      photo: [diary1, diary2, diary3, diary4]
    },
    {
      name: "The Shopping Project",
      img: Shopping,
      skills: ["Boostrap", "Reactjs", "Redux", "React Router"],
      sourcecode: "https://github.com/vinhphu101195/shopping",
      demo: "https://phuchaushopping.herokuapp.com/",
      description: `The project show status of the products, the data of product is stored in mockapi.io. User can Add, Edit and delete the items.
    `,
      photo: [Shopping, shopping1, shopping2, shopping3]
    },
    {
      name: "The To-do List Project",
      img: Todolist,
      skills: ["HTML", "CSS", "Reactjs"],
      sourcecode: "https://github.com/vinhphu101195/Managing-Working",
      demo: "https://managingworking.herokuapp.com/",
      description: `To-Do List project is used the basic of React, the user can create a to-do list and
    it is stored in the local storage. There are some function: Add, Find, Sort, Edit and Delete.
    `,
      photo: [Todolist, todolist1, todolist2, todolist3]
    },

    {
      name: "The Advanced CSS",
      img: advancedcss,
      skills: ["HTML", "CSS"],
      sourcecode: "https://github.com/vinhphu101195/Advance-HTML-CSS",
      demo: "https://vinhphu101195.github.io/Advance-HTML-CSS/",
      description: `I take the advance HTML CSS course from Udemy. I learned SASS and Tons of modern CSS techniques to create stunning designs and effects.  
    `,
      photo: [
        advancedcss1,
        advancedcss2,
        advancedcss3,
        advancedcss4
      ]
    },
    {
      name: "The Ambassador Network",
      img: ambassadornetwork,
      skills: ["HTML", "CSS", "Google Maps Framework"],
      sourcecode: "",
      demo: "https://ambassadornetwork.turkuamk.fi/",
      description: `The Ambassador Network project is from The Student Ambassador Network of South-West Finland organization.   
    I working in the Front-end position in the project.  
    `,
      photo: [
        ambassadornetwork,

        ambassadornetwork2,
        ambassadornetwork3,
        ambassadornetwork4,
        ambassadornetwork5
      ]
    },
    {
      name: "Chatting Project",
      img: Chatting,
      skills: ["Reactjs", "Firebase"],
      sourcecode: "https://github.com/vinhphu101195/chatting",
      demo: "https://pc-chatting.herokuapp.com/",
      description: `It's a realtime Project which is build by Reactjs and Firebase for database.
      User can login with google account, then they can start chatting and sharing photo.`,
      photo: [Chatting, Chatting2]
    },
    {
      name: "Drap & Drop React Beautiful dnd",
      img: drapdop,
      skills: ["HTML", "CSS", "Reactjs", "react-beautiful-dnd"],
      sourcecode:
        "https://github.com/vinhphu101195/drap-and-drop-react-beautiful-dnd",
      demo: "https://drap-drop-react.netlify.com/",
      description: `I use React Hook and react-beautiful-dnd for this project. User can create tasks, then it can be move between columns like Trello.com 
    `,
      photo: [drapdop1, drapdop2, drapdop3]
    },
    {
      name: "Nexter Advance CSS Grid",
      img: gridcss1,
      skills: ["HTML", "CSS"],
      sourcecode: "https://github.com/vinhphu101195/Nexter-Advance-CSS-Grid",
      demo: "https://vinhphu101195.github.io/Nexter-Advance-CSS-Grid/",
      description: `The project is design by Jonas Schmedtmann, and I used grid and flexbox to build it 
    `,
      photo: [gridcss1, gridcss2, gridcss3, gridcss4, gridcss5]
    },
    {
      name: "Library with React Hook",
      img: reacthook,
      skills: ["HTML", "CSS", "Reactjs"],
      sourcecode: "https://github.com/vinhphu101195/React-Hook",
      demo: "https://phu-chau-react-hook.herokuapp.com/",
      description: `in this project, i start to learn what new in React Hook and combine it with react context, i start to use "createContext,useContext,useState,useReducer, useEffect" 
    `,
      photo: [reacthook1, reacthook2, reacthook3, reacthook4]
    },
    {
      name: "My Portfolio 1",
      img: portfolio,
      skills: ["HTML", "CSS", "Reactjs", "React Router"],
      sourcecode: "https://github.com/vinhphu101195/Phu-Chau-Portfolio",
      demo: "https://phuchauportfolio.netlify.com",
      description:
        "It is my frist portfolio, I use Reactjs and React Router for this project",
      photo: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4]
    }
  ];
  return (
    <ProjectContext.Provider value={{ projectObject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContexts;
