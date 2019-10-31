import React from "react";
import "./popup.css";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <h1>
          Hi, you are accessing my portfolio by mobile device, so please click
          the button to move to another page
        </h1>
        <a href="https://phuchauportfolio2.netlify.com/">
          <button className="btn btn--green btn--move">Move</button>
        </a>
      </div>
    </div>
  );
}
