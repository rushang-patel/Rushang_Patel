import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </div>
        <div>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1em', margin: 0, padding: 0 }}>
            <li>
              <Link to="/about-me" className="nav-button">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="nav-button">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/experience" className="nav-button">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/passion" className="nav-button">
                Passion
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-button">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-button">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
