import React, { useContext, useState } from "react";
import "./Project.css";
import SmallProject from "./SmallProject";
import { ProjectContext } from "../../contexts/ProjectContexts";
// import Projectpopup from "./ProjectPopup";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  const [popup, setPopup] = useState({});

  const onClickPopup = data => {
    setPopup(data);
  };

  const showProjects = projects => {
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
  };

  const showProjectsName = projects => {
    if (projects.length > 0) {
      return projects.map((project, index) => {
        return <li>{project.name}</li>;
      });
    }
  };

  return (
    <section className="projects">
      <h1 className="projects__title">project menu</h1>
      <div className="projects__detail"></div>
      <ul className="projects__listNames">
        {showProjectsName(projectObject)}
      </ul>
    </section>
  );
};

export default Projects;
