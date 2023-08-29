import React, { useState } from 'react';
import '../styles/pages/Exercises.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faImage,
  faSitemap,
  faTasks,
  faSyncAlt,
  faObjectGroup,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState('1c');

  const exercises = [
    {
      id: '1c',
      title: 'Intro to Web Dev and HTML',
      content: (
        <div>
          <p><strong>Question 1:</strong> Kahoot Questions and Answers</p>
          <ol type="A">
            <ul>A. A computer on which the website or web app files are hosted</ul>
            <ul>B. Internet</ul>
            <ul>C. Web</ul>
            <ul>D. <strong className="correct-answer">Server (Correct Answer)</strong></ul>
          </ol>
          <p>
            <strong>Question 2:</strong> The part of the web page that the web browser displays in
            the browser window, and that you see and interact with.
          </p>
          <ol type="A">
            <ul>A. Back-end</ul>
            <ul>B. Assembly Language</ul>
            <ul>C. <strong className="correct-answer"> Front-end (Correct Answer)</strong></ul>
            <ul>D. Operating System</ul>
          </ol>
          <p><strong>Question 3:</strong><span className="correct-answer"> <strong>True</strong></span> or False: Front-end Web Development is also called Client-side Web Development</p>
          <p><strong>Question 4:</strong>  Which of the following is NOT part of the core web technologies?</p>
          <ol>
            <ul>A. JavaScript</ul>
            <ul>B. <strong className="correct-answer">Python (Correct Answer)</strong></ul>
            <ul>C. CSS</ul>
            <ul>D. HTML</ul>
          </ol>
          <p><strong>Question 5:</strong> Which of the following is NOT an aspect of web development?</p>
          <ol>
            <ul>A. Web Design </ul>
            <ul>B. Web Programming</ul>
            <ul>C. <strong className="correct-answer">Web Crawling (Correct Answer)</strong></ul>
            <ul> D. Web Publishing</ul>
          </ol>
          <p><strong>Question 6:</strong> True or <span className="correct-answer"><strong>False:</strong></span> We use CSS to make our web pages dynamic and interactive.</p>
          <p><strong>Question 7:</strong> Which one do you use to inform the browser that the document is an HTML5 document?</p>
          <ol type="A">
            <ul>A. &lt;html&gt;&lt;/html&gt;</ul>
            <ul>B. <strong className="correct-answer"> &lt;!DOCTYPE html&gt; (Correct Answer)</strong></ul>
            <ul>C. &lt;meta charset="UTF-8"/&gt;</ul>
            <ul>D. &lt;head&gt;&lt;/head&gt;</ul>
          </ol>
          <p><strong>Question 8:</strong> <span className="correct-answer"><strong>True</strong></span> or False: HTML Elements are placed in the opening tag and take values which convey more information about the element.</p>
          <p><strong>Question 9:</strong> What is the correct syntax for a closing tag?</p>
          <ol type="A">
            <ul>A. [/div]</ul>
            <ul>B. &lt;\\div&gt;</ul>
            <ul>C. &lt;div/&gt;</ul>
            <ul>D. <strong className="correct-answer"> &lt;/div&gt; (Correct Answer)</strong></ul>
          </ol>
          <p><strong>Question 10:</strong> <span className="correct-answer"><strong>True</strong></span> or False: &lt;img&gt; is a self-closing tag</p>
          <p><strong>Question 11:</strong> <span className="correct-answer"><strong>False</strong></span> or True: An ordered list is an element that shows listings in bullet form.</p>
          <p><strong>Question 12:</strong> Which of the following is NOT a valid attribute of an HTML element</p>
          <ol type="A">
            <ul>A. href</ul>
            <ul>B. src</ul>
            <ul>C. <strong className="correct-answer">background-color (Correct Answer)</strong></ul>
            <ul>D. width</ul>
          </ol>
        </div>
      ),
      icon: faQuestionCircle,
    },
    {
      id: '1e',
      title: 'Kahoot (HTML and CSS)',
      content: 'html-css-01.png...',
      icon: faImage,
    },
    {
      id: '2a',
      title: 'Pseudocode and Flowchart',
      content: 'html-css-01.png...',
      icon: faSitemap,
    },
    {
      id: '2b',
      title: 'Easy Programming Algorithms',
      content: 'html-css-01.png...',
      icon: faTasks,
    },
    {
      id: '2c',
      title: 'Javascript Loops',
      content: 'html-css-01.png...',
      icon: faSyncAlt,
    },
    {
      id: '2d',
      title: 'JS Arrays and Objects',
      content: 'html-css-01.png...',
      icon: faObjectGroup,
    },
    {
      id: '3a',
      title: 'PHP Basics',
      content: 'html-css-01.png...',
      icon: faCogs,
    },
    // Add more exercises here...
  ];

  const exerciseClickHandler = (exerciseId) => {
    setSelectedExercise(exerciseId);
  };
  

  return (
    <div className="exercises-page">
      <h1>Exercises</h1>
      <div className="exercise-container">
        <div className="exercise-list">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className={`exercise ${selectedExercise === exercise.id ? 'active' : ''}`}
              onClick={() => exerciseClickHandler(exercise.id)}
            >
              <FontAwesomeIcon icon={exercise.icon} className="exercise-icon" />
              {exercise.title}
            </div>
          ))}
        </div>
        <div className="exercise-content">
          {selectedExercise && (
            <div className="exercise-details">
              <h2>{exercises.find((ex) => ex.id === selectedExercise).title}</h2>
              <div className="exercise-content-text">
                {exercises.find((ex) => ex.id === selectedExercise).content}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
