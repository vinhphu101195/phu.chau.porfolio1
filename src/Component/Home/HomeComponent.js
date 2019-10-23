import React from "react";
import "./Home.css";
import logo from "../../logo.svg";

const HomeComponent = () => {
    return (
        <div>
            <header className="App-header ">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="header-infor">
                    <h1>Phu Chau</h1>
                    <h2>"Maximum Effort" </h2>
                    <button to="/profile" className="btn btn--green  ">
                        Discover More
                    </button>
                </div>
            </header>
        </div>
    );
}

export default HomeComponent;

