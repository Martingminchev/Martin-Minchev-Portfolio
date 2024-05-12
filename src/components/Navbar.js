import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/Projects" className="nav-link">Projects</NavLink>
      <NavLink to="/Education" className="nav-link">Education</NavLink>
      <NavLink to="/AboutMe" className="nav-link">About me</NavLink>
      <NavLink to="Contacts" className="nav-link">Contacts</NavLink>
    </div>
  );
};

export default Navbar;
