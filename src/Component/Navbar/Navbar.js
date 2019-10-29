import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import "./navbar.css";

/* const CustomLink = ({ children, to, exact }) => {
  const match = window.location.pathname === to;
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <div
          className={match ? "active-link mobile-navlink" : " mobile-navlink"}
        >
          <Link to={to} className="none-under">
            {children}
          </Link>
        </div>
      )}
    />
  );
}; */

export default function Navbar() {
  function openNavbar(open) {
    setopen(open ? (open = false) : (open = true));
  }
  const [open, setopen] = useState(false);

  return (
    <div className="navbar-parent">
      <ul className={open ? "navbar displayNavbar" : "navbar nondisplayNavbar"}>
{/*         <CustomLink to="/" className="nav-li" exact={true}>
 */}          <i className="icon fas fa-home" />
{/*         </CustomLink>
 */}
{/*         <CustomLink to="/profile" className="nav-li">
 */}          <i className=" icon  fas fa-id-card" />
{/*         </CustomLink>
 */}
{/*         <CustomLink to="/projects" className="nav-li">
 */}          <i className=" icon fas fa-project-diagram" />{" "}
{/*         </CustomLink>
 */}
{/*         <CustomLink to="/contact" className="nav-li">
 */}          <i className="icon fas fa-sms" />
{/*         </CustomLink>
 */}      </ul>
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