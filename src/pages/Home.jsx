import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCode, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <div className="landing">
        <img
          src="https://f.hubspotusercontent10.net/hubfs/6448316/applications-of-computer-programming.jpg"
          alt="Programmer Background"
        />
        <div className="overlay-content">
          <h2>Introducing Canvas 2.0</h2>
          <p>
          Your Essential Web Development Resource: Curated Learning Materials for Aspiring Developers. Master web development with tutorials, guides, and tools.
          </p>
          <a href="/courses" className="btn btn-primary">
            Visit Courses
          </a>
        </div>
      </div>
      <div className="features">
        <div className="feature-card">
          <div className="feature">
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
            <h3>Comprehensive Resource Library</h3>
            <p>
              Access an extensive collection of files and resources essential for web developers.
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h3>In-Demand Coding Languages</h3>
            <p>
              Stay updated on the latest web development trends and technologies
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature">
            <FontAwesomeIcon icon={faCloudDownloadAlt} className="icon" />
            <h3>Downloadable Files</h3>
            <p>
              Download essential files and enjoy unrestricted access to our vibrant community.
            </p>
          </div>
        </div>
      </div>
      <div className="placeholder">
        <img
          src="https://iformatlogic.com/photo/plugin/article/2019/1574324865_1-org.jpg"
          alt="Placeholder"
        />
        <p>Website is Under Construction...</p>
      </div>
    </div>
  );
};

export default Home;
