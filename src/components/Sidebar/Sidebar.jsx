import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCode,
  faHome,
  faTimes,
  faVideo,
  faGlobe,
  faBookmark,
  faFileCode,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';
import './Sidebar.scss';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="TechBlazers" />
      </div>
      <div className="logo">
        <p className="logo-sidebar">TechBlazers</p>
      </div>

      <div className="sidebar-icons">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
        <Link to="/courses">
          <FontAwesomeIcon icon={faBook} />
          Courses
        </Link>
        <Link to="class-recording">
          <FontAwesomeIcon icon={faVideo} />
          Class Recording
        </Link>
        <Link to="/notebooks">
          <FontAwesomeIcon icon={faFileCode} />
          Notebooks
        </Link>
        <Link to="/website-projects">
          <FontAwesomeIcon icon={faGlobe} />
          Website Projects
        </Link>
        <Link to="/wd73-toolkit">
          <FontAwesomeIcon icon={faBookmark} />
          WD73 Toolkit
        </Link>
        <Link to="/code-snippets">
          <FontAwesomeIcon icon={faCode} />
          Code Snippets
        </Link>
        <Link to="/exercises">
          <FontAwesomeIcon icon={faPencilAlt} />
          Exercises
        </Link>
      </div>

      <div className="centered-button">
        <button
          className="btn btn-primary d-md-none close-button"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faTimes} />
          
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
