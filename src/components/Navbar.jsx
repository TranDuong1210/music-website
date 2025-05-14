import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyMusic</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Library</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
