import React from 'react';
import './Navbar.css';
import logo from './airbnb.jpg';

function Navbar() {
  return (
    <nav className="nav-bar">
        <img src={logo} alt="Airbnb Logo"/>
    </nav>
  );
}

export default Navbar;
