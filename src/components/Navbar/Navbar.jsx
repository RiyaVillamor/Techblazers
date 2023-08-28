import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';
import './Navbar.scss';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className="logo-navbar">
                <img src={Logo} alt="TechBlazers" width="10" height="10" /> 
                
            </div>
            <div className="logo-navbar">
                <p>TechBlazers</p>
            </div>

            <button className="toggle-button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
};

export default Navbar;
