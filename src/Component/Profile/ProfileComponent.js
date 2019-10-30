import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {
    clock: false,
    HTML: 90,
    CSS: 80,
    JavaScript: 80,
    React: 70,
    Redux: 50,
    ReactRouter: 50,
    Sass: 75,
    SQL: 50,
    Nodejs: 30,
    Logical: 85,
    TeamWork: 80,
    Problem: 90,
    Orgranizing: 90
  };

  render() {
    return (
      <div>
        <div className="body-profile ">
          <div className="container ">
            <div className="top">
              <div className="main">
                <ul>
                  <li className="name ">Phu Chau</li>
                  <li className="bar" />
                  <li className="position">Front-end Web Developer</li>
                </ul>
              </div>
              <div className="photo " />
              <div className="info">
                <div className="skill skill-left">
                  <h2 className="header">Front-end:</h2>
                  <ul>
                    <li className="data">HTML</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-html"
                        style={{ width: this.state.HTML + "%" }}
                      />
                    </div>
                    <li className="data">CSS</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-css"
                        style={{ width: this.state.CSS + "%" }}
                      />
                    </div>

                    <li className="data">JavaScript</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-javascript"
                        style={{ width: this.state.JavaScript + "%" }}
                      />
                    </div>

                    <li className="data">React</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-react"
                        style={{ width: this.state.React + "%" }}
                      />
                    </div>

                    <li className="data">Redux</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-redux"
                        style={{ width: this.state.Redux + "%" }}
                      />
                    </div>

                    <li className="data">React Router</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-reactrouter"
                        style={{ width: this.state.ReactRouter + "%" }}
                      />
                    </div>

                    <li className="data">Sass</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-sass"
                        style={{ width: this.state.Sass + "%" }}
                      />
                    </div>
                  </ul>
                </div>
                <div className="skill skill-right">
                  <h2 className="header">Back-end:</h2>
                  <ul>
                    <li className="data">SQL</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-sql"
                        style={{ width: this.state.SQL + "%" }}
                      />
                    </div>
                    <li className="data">Nodejs</li>
                    <div className="skill-bar ">
                      <div
                        className="skill-bar-fill animation-nodejs"
                        style={{ width: this.state.Nodejs + "%" }}
                      />
                    </div>
                  </ul>
                  <h2 className="header ">Solf Skills:</h2>
                  <ul>
                    <li className="data">Logical Thinking</li>
                    <div className="skill-bar ">
                      <div
                        className="skill-bar-fill animation-logical-thinking"
                        style={{ width: this.state.Logical + "%" }}
                      />
                    </div>
                    <li className="data">Team Work</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-teamwork"
                        style={{ width: this.state.TeamWork + "%" }}
                      />
                    </div>

                    <li className="data">Problem Solving</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-problem-solving"
                        style={{ width: this.state.Problem + "%" }}
                      />
                    </div>
                    <li className="data">Orgranizing</li>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill animation-orgranizing"
                        style={{ width: this.state.Orgranizing + "%" }}
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="part1">
                <h3 className="title">Introduction</h3>
                <p className="introduction">
                  I have 1 years experience building and maintaining responsive
                  websites in the recruiting industry.
                  <br />
                  <br />
                  Proficient in HTML, CSS, JavaScript; plus modern libraries and
                  frameworks such as React, Redux, React Router, Nodejs.
                  <br />
                  <br />
                  Passionate about learning new things and outsite activity.
                </p>
              </div>

              <div className="part2">
                <h3 className="title">Experience</h3>
                <div className="experience">
                  <div className="year">06.2018 - 07.2019:</div>
                  Student Assistant of TUAS as Web developer: Working in the
                  front-end and back-end position. My tasks include creating,
                  editing, maintaining web pages and working with customer
                  database.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
