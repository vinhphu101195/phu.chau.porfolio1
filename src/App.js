import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./index.css";

import ProjectContexts from "./contexts/ProjectContexts";

import Home from "./Component/Home/HomeComponent";
import Profile from "./Component/Profile/ProfileComponent";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Popup from "./Component/PopupResponsive/Popup";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar  currentPage={this.state.currentPage} OngoToPage = {(number) =>this.goToPage(number)}></Navbar>
        <Popup></Popup>
        <ProjectContexts>
          <ReactPageScroller
            ref={c => (this._pageScroller = c)}
            pageOnChange={this.pageOnChange}
          >
            <Home OngoToPage = {(number) =>this.goToPage(number)}/>
            <Profile />
            <Project />
            <Contact />
          </ReactPageScroller>
        </ProjectContexts>
      </React.Fragment>
    );
  }
}
