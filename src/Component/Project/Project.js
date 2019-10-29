import React, { useContext, useState } from "react";
import "./Project.css";
import { ProjectContext } from "../../contexts/ProjectContexts";
import hinh from "../Profile/avatar.jpg";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  const [popup, setPopup] = useState({});

  const onClickPopup = data => {
    setPopup(data);
  };

  /*   const showProjects = projects => {
    if (projects.length > 0) {
      return projects.map((project, index) => {
        return (
          <SmallProject
            key={index}
            project={project}
            index={index}
            onClickPopup={data => onClickPopup(data)}
          ></SmallProject>
        );
      });
    }
  }; */

  const showProjectsName = projects => {
    if (projects.length > 0) {
      return projects.map((project, index) => {
        return <li key={index}>{project.name}</li>;
      });
    }
  };

  return (
    <section className="projects">
      <h1 className="projects__title">project menu</h1>
      <div className="projects__detail">
        <div className="projects__detail__photo ">
          <i class="fas fa-chevron-left projects__icons"></i>
          <img
            src={hinh}
            className="projects__detail__img"
            alt="example of project"
          />
          <i class="fas fa-chevron-right projects__icons"></i>
        </div>
        <div className="projects__details__links">
          {popup.sourcecode ? (
            <a
              href={popup.sourcecode}
              target="_blank"
              rel="noopener noreferrer "
              className="popup__link-source__detail"
            >
              <span>Source Code</span>|
            </a>
          ) : (
            ""
          )}
          <a
            href={popup.demo}
            target="_blank"
            rel="noopener noreferrer "
            className="popup__link-source__detail"
          >
            <span> Demo</span>
          </a>
        </div>
        <div className="projects__details__skills">
          <div className="project__details__skill">html</div>
          <div className="project__details__skill">css</div>
          <div className="project__details__skill">Reactjs</div>
        </div>

        <p className="projects__details__description">
          It's the first project i used react and redux, there is Call API from
          "Food2Fork.com", You can input the food's name which you want to eat
          at the search bar, then it will show you how to cook it, what
          ingredients do you need to buy and time for cooking. You can like that
          recipe and add to the shopping list
        </p>
      </div>
      <ul className="projects__listNames">{showProjectsName(projectObject)}</ul>
    </section>
  );
};

export default Projects;
