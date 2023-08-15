import React from "react";
import "./NavBar.css"
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <ul className="nav-ul">
      <li className="nav-li">
        <NavLink className={({isActive})=>isActive? "active":""} to="/" end={true}>Home</NavLink>
      </li>
      <li className="nav-li">
        <NavLink className={({isActive})=>isActive? "active":""} to="/jobs">Find Jobs</NavLink>
      </li>
      <li className="nav-li">
        <NavLink className={({isActive})=>isActive? "active":""} to="/add">Add Job</NavLink>
      </li>
    </ul>
    <Outlet />
    </>
  );
};

export default NavBar;
