import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faAppStoreIos,
  // faHtml5,
  // faCss3Alt,
  // faJsSquare,
} from '@fortawesome/free-solid-svg-icons';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import '../styles/pages/Courses.scss';

const Courses = () => {
  return (
    <div className="courses-page">
      <section className="main">
        <section className="main-course">
          <h4>My courses</h4>
          <div className="course-box">
            <ul>
              <li className="active">All</li>
              <li>Front End</li>
              <li>Back End</li>
              <li>Database</li>
            </ul>
            <div className="course">
              <div className="box">
                <h4>HTML</h4>
                <p>Basic HTML Tags</p>
                <button>View More</button>
                <img src={Html} alt="Html" className="html" />
              </div>
              <div className="box">
                <h4>CSS</h4>
                <p>Style rules</p>
                <button>View More</button>
                <img src={Css} alt="Css" className="css" />
              </div>

              <div className="box">
                <h4>Bootsrap</h4>
                <p>Basic HTML Tags</p>
                <button>View More</button>
                <img src={Html} alt="Html" className="html" />
              </div>
              <div className="box">
                <h4>JavaScript</h4>
                <p>Web scripting</p>
                <button >View More</button>
                <img src={Javascript} alt="Javascript" className="js" />
              </div>
              <div className="box">
                <h4>React</h4>
                <p>Style rules</p>
                <button>View More</button>
                <img src={Css} alt="Css" className="css" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Courses;
