import React from "react";

const SmallProject = props => {
    console.log(props);

    const showSkills = skills => {
        if (skills.length > 0) {
            return skills.map((skill, index) => {
                return (
                    <p className="project__detail__item" key={index}>
                        <i className="fa fa-check icon" aria-hidden="true"></i>
                        {skill}
                    </p>
                );
            });
        }
    };

    return (
        <div>
            "hello"
       </div>
    );
};

export default SmallProject;
