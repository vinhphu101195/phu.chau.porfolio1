import React, { useContext, useState } from "react";
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

    return (
        <section className="projects">
            {/* {showProjects(projectObject)} */}
            {/* {<Projectpopup project={popup}></Projectpopup>} */}

        </section>
    );
};

export default Projects;
