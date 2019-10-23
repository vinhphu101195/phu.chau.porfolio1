import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./index.css";

import Home from "./Component/Home/HomeComponent";
import Profile from "./Component/Profile/ProfileComponent";
import Third from "./Third";
import Contact from "./Component/Contact/Contact";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
  };



  render() {
    return <React.Fragment>
      <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
        <Home />
        <Profile />
        <Third />
        <Contact />
      </ReactPageScroller>

    </React.Fragment>
  }
}