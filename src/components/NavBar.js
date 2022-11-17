import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const activeStyle = {
    color: '#da6900',
    textDecoration: 'underline',
  };

  return (
    <div>
      <nav>
        <h1 className="logo">Math Magicians</h1>
        <ul className="navLinks">
          <li className="link">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/calculator"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Calculator
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/quotes"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
