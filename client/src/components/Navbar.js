import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import './styles.scss'; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>The Players</h1>
      <div className="dark-mode__toggle">
        <div
          data-testid="toggle-mode"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
