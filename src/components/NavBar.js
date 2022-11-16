import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <h1 className="logo">Math Magicians</h1>
        <ul className="navLinks">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/calculator">Calculator</Link></li>
          <li className="link"><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
