import React from "react";
import "./popup.css";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <h1>
          Hi, it seems like you are using mobile device. Please, CLICK the
          button to move to the page for mobile device.
        </h1>
        <a href="https://phuchauportfolio2.netlify.com/">
          <button className="btn btn--green btn--move">Move</button>
        </a>
      </div>
    </div>
  );
}
