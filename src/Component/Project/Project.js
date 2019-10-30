import React, { useContext, useState,useEffect } from "react";
import "./Project.css";
import { ProjectContext } from "../../contexts/ProjectContexts";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  const [popup, setPopup] = useState(projectObject[0]);
  const [photo,setPhoto] = useState(popup.photo[0])

  const showSkills = skills => {
    return skills.map((skill,index) => {
      return <div key={index} className="project__details__skill">{skill}</div>;
    });
  };

  const showProjectsName = projects => {
    if (projects.length > 0) {
      return projects.map((project, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setPopup(project);
              setPhoto(project.photo[0])
            }}
            className="projects__list__click"
          >
            <li>{project.name}</li>
          </div>
        );
      });
    }
  };

  console.log(popup);

  return (
    <section className="projects">
      <h1 className="projects__title">
        {popup.name ? popup.name : "project menu"}
      </h1>
      <div className="projects__detail">
        <div className="projects__detail__photo ">
          <i className="fas fa-chevron-left projects__icons"></i>
          <img
            src={photo}
            className="projects__detail__img"
            alt="example of project"
          />
          <i className="fas fa-chevron-right projects__icons"></i>
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
          {showSkills(popup.skills)}
        </div>

        <p className="projects__details__description">{popup.description}</p>
      </div>
      <ul className="projects__listNames">{showProjectsName(projectObject)}</ul>
    </section>
  );
};

export default Projects;
