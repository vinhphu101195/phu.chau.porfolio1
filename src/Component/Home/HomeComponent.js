import React from "react";
import "./Home.css";
import logo from "../../logo.svg";

const HomeComponent = () => {
    return (
        <div>
            <header className="App-header ">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="header-infor">
                    <h1 className="header-title">Phu Chau</h1>
                    <h2 className="header-slogan">"Work Hard, Play Hard" </h2>
                    <button to="/profile" className="btn btn--green  ">
                        Discover More
                    </button>
                </div>
            </header>
        </div>
    );
}

export default HomeComponent;

