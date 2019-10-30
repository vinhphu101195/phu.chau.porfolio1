import React, { useContext, useState } from "react";
import "./Project.css";
import { ProjectContext } from "../../contexts/ProjectContexts";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  const [popup, setPopup] = useState(projectObject[0]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const showSkills = skills => {
    return skills.map((skill, index) => {
      return (
        <div key={index} className="project__details__skill">
          {skill}
        </div>
      );
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
              setPhotoIndex(0);
            }}
            className={
              popup.name === project.name
                ? " projects__list__click isActive"
                : "projects__list__click"
            }
          >
            <li>{project.name}</li>
          </div>
        );
      });
    }
  };

  function onclickRight() {
    if (photoIndex < popup.photo.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  }
  function onclickLeft() {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  }

  return (
    <section className="projects">
      <h1 className="projects__title">
        {popup.name ? popup.name : "project menu"}
      </h1>
      <div className="projects__detail">
        <div className="projects__detail__photo ">
          <i
            className={
              photoIndex === 0
                ? "fas fa-chevron-left projects__icons isLocked"
                : "fas fa-chevron-left projects__icons"
            }
            onClick={() => onclickLeft()}
          ></i>
          <img
            src={popup.photo[photoIndex]}
            className="projects__detail__img"
            alt="example of project"
          />
          <i
            className={
              photoIndex === popup.photo.length - 1
                ? "fas fa-chevron-right projects__icons isLocked"
                : "fas fa-chevron-right projects__icons"
            }
            onClick={() => onclickRight()}
          ></i>
        </div>
        <div className="projects__details__links">
          {popup.sourcecode ? (
            <a
              href={popup.sourcecode}
              target="_blank"
              rel="noopener noreferrer "
              className="popup__link-source__detail"
            >
              <span>Source Code </span>|
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
