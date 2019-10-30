import React, { useState } from "react";

import "./navbar.css";

export default function Navbar(props) {
  function openNavbar(open) {
    setopen(open ? (open = false) : (open = true));
  }
  const [open, setopen] = useState(false);

  console.log(props.currentPage);

  return (
    <div className="navbar-parent">
      <ul className={open ? "navbar displayNavbar" : "navbar nondisplayNavbar"}>
        <i
          className={
            props.currentPage === 1
              ? "icon fas fa-home nav__icons nav__active"
              : "icon fas fa-home nav__icons"
          }
          onClick={() => props.OngoToPage(0)}
        />
        <i
          className={
            props.currentPage === 2
              ? "icon  fas fa-id-card nav__icons nav__active"
              : "icon  fas fa-id-card nav__icons"
          }
          onClick={() => props.OngoToPage(1)}
        />
        <i
          className={
            props.currentPage === 3
              ? "icon fas fa-project-diagram nav__icons nav__active"
              : "icon fas fa-project-diagram nav__icons"
          }
          onClick={() => props.OngoToPage(2)}
        />
        <i
          className={
            props.currentPage === 4
              ? "icon fas fa-sms nav__icons nav__icons nav__active"
              : "icon fas fa-sms nav__icons nav__icons"
          }
          onClick={() => props.OngoToPage(3)}
        />
      </ul>
      <div
        className={
          open
            ? "icon fas fa-times mobile-nav-icon"
            : "icon fas fa-bars mobile-nav-icon"
        }
        onClick={() => openNavbar(open)}
      />
    </div>
  );
}
