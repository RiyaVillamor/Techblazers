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
          <ul type="A">
            <ul>A. A computer on which the website or web app files are hosted</ul>
            <ul>B. Internet</ul>
            <ul>C. Web</ul>
            <ul>D. <strong className="correct-answer">Server (Correct Answer)</strong></ul>
          </ul>
          <p>
            <strong>Question 2:</strong> The part of the web page that the web browser displays in
            the browser window, and that you see and interact with.
          </p>
          <ul type="A">
            <ul>A. Back-end</ul>
            <ul>B. Assembly Language</ul>
            <ul>C. <strong className="correct-answer"> Front-end (Correct Answer)</strong></ul>
            <ul>D. Operating System</ul>
          </ul>
          <p><strong>Question 3:</strong><span className="correct-answer"> <strong>True</strong></span> or False: Front-end Web Development is also called Client-side Web Development</p>
          <p><strong>Question 4:</strong>  Which of the following is NOT part of the core web technologies?</p>
          <ul>
            <ul>A. JavaScript</ul>
            <ul>B. <strong className="correct-answer">Python (Correct Answer)</strong></ul>
            <ul>C. CSS</ul>
            <ul>D. HTML</ul>
          </ul>
          <p><strong>Question 5:</strong> Which of the following is NOT an aspect of web development?</p>
          <ul>
            <ul>A. Web Design </ul>
            <ul>B. Web Programming</ul>
            <ul>C. <strong className="correct-answer">Web Crawling (Correct Answer)</strong></ul>
            <ul> D. Web Publishing</ul>
          </ul>
          <p><strong>Question 6:</strong> True or <span className="correct-answer"><strong>False:</strong></span> We use CSS to make our web pages dynamic and interactive.</p>
          <p><strong>Question 7:</strong> Which one do you use to inform the browser that the document is an HTML5 document?</p>
          <ul type="A">
            <ul>A. &lt;html&gt;&lt;/html&gt;</ul>
            <ul>B. <strong className="correct-answer"> &lt;!DOCTYPE html&gt; (Correct Answer)</strong></ul>
            <ul>C. &lt;meta charset="UTF-8"/&gt;</ul>
            <ul>D. &lt;head&gt;&lt;/head&gt;</ul>
          </ul>
          <p><strong>Question 8:</strong> <span className="correct-answer"><strong>True</strong></span> or False: HTML Elements are placed in the opening tag and take values which convey more information about the element.</p>
          <p><strong>Question 9:</strong> What is the correct syntax for a closing tag?</p>
          <ul type="A">
            <ul>A. [/div]</ul>
            <ul>B. &lt;\\div&gt;</ul>
            <ul>C. &lt;div/&gt;</ul>
            <ul>D. <strong className="correct-answer"> &lt;/div&gt; (Correct Answer)</strong></ul>
          </ul>
          <p><strong>Question 10:</strong> <span className="correct-answer"><strong>True</strong></span> or False: &lt;img&gt; is a self-closing tag</p>
          <p><strong>Question 11:</strong> <span className="correct-answer"><strong>False</strong></span> or True: An ordered list is an element that shows listings in bullet form.</p>
          <p><strong>Question 12:</strong> Which of the following is NOT a valid attribute of an HTML element</p>
          <ul type="A">
            <ul>A. href</ul>
            <ul>B. src</ul>
            <ul>C. <strong className="correct-answer">background-color (Correct Answer)</strong></ul>
            <ul>D. width</ul>
          </ul>
        </div>
      ),
      icon: faQuestionCircle,
    },
    {
      id: '1e',
      title: 'Kahoot (HTML and CSS)',
      content: (
        <div>
          <p><strong>Question 1:</strong> What HTML attribute do we use in tables to make a cell span for more than 1 row?</p>
          <ul>
            <li>A. rownum</li>
            <li>B. colnum</li>
            <li>C. <strong className="correct-answer">rowspan (Correct Answer)</strong></li>
            <li>D. colspan</li>
          </ul>
          <p><strong>Question 2:</strong> Which of the following CSS unit do we use to specify length relative to its parent container?</p>
          <ul>
            <li>A. rem</li>
            <li>B. px</li>
            <li>C. vw</li>
            <li>D. <strong className="correct-answer">% (Correct Answer)</strong></li>
          </ul>
          <p><strong>Question 3:</strong>True or<span className="correct-answer"><strong> False:</strong></span> To submit an HTML form and then redirect to another page, we can make use of the hyperlink or anchor tag?</p>
          <p><strong>Question 4:</strong> Which input attribute should be equal to the 'for' attribute of "label" in order to bind them together?</p>
          <ul>
            <li>A. name</li>
            <li>B. id <strong className="correct-answer">(Correct Answer)</strong></li>
            <li>C. class</li>
            <li>D. value</li>
          </ul>
          <p><strong>Question 5:</strong><span className="correct-answer"><strong> True</strong></span> or False: Unlike checkbox, only one radio button in a group can be selected at a time.</p>
          <p><strong>Question 3:</strong>True or<span className="correct-answer"><strong> False:</strong></span> The radio group must share the same id to be treated as a group.</p>
          <p><strong>Question 7:</strong> Which of the following is NOT a reason why we should use semantic elements?</p>
          <ul>
            <li>A. Readability and Maintainability</li>
            <li>B. Reusability <strong className="correct-answer">(Correct Answer)</strong></li>
            <li>C. Search Engine Optimization</li>
            <li>D. User Accessibility</li>
          </ul>
          <p><strong>Question 5:</strong><span className="correct-answer"><strong> True</strong></span> or False: We use "iframe" to embed another document within the current HTML document.</p>
          <p><strong>Question 9:</strong> What type of CSS do we use when we want to use the styling for multiple web pages?</p>
          <ul>
            <li>A. Inline</li>
            <li>B. Embedded</li>
            <li>C. Internal</li>
            <li>D. <strong className="correct-answer">External (Correct Answer)</strong></li>
          </ul>
          <p><strong>Question 10:</strong> What is the syntax for the CSS id selector?</p>
          <p>A.<strong className="correct-answer"> #sample-item { }</strong></p>
          <p>B. .sample-item { }</p>
          <p>C. sample-item { }</p>
          <p>D. :sample-item { }</p>
        </div>
      ),
      icon: faImage,
    },

    {
      id: '2a',
      title: 'Pseudocode and Flowchart',
      content: (
        <div>
          <div className="problem-container">
            <p><b>Problem #1</b></p>
            <p>Write a program that outputs the sum of two numbers</p>
            <hr />
            <p><b>Input:</b> <b>x</b> and <b>y</b></p>
            <p><b>Output:</b> <b>sum</b></p>
            <hr />
            <p><b>Example Input:</b> 4 and 5</p>
            <p><b>Expected Output:</b> 9</p>
            <hr />
            <p><b>Example Input:</b> 10 and 3</p>
            <p><b>Expected Output:</b> 7</p>
            <hr />
            <p className="text-danger">View solutions only after trying to solve the problem on your own.</p>
           
              <div className="problem-item">
                <h2 className="problem-header">
                  <button >
                    SOLUTION: Pseudocode
                  </button>
                </h2>
                <div >
                  <div className="problem-solution">
                    <ol>
                      <li>let sum</li>
                      <li>input x and y</li>
                      <li>sum = x + y</li>
                      <li>output sum</li>
                    </ol>
                  </div>
                </div>
             
              <div className="problem-item">
                <h2 className="problem-header">
                  <button>
                    SOLUTION: Flowchart
                  </button>
                </h2>
                <div  >
                  <div className="problem-solution">
                    <img src="data:image/png;base64,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" alt="problem-1-flowchart"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
     
          {/* Problem #2 */}
          
        </div>
      ),
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
      <h4>Exercises</h4>
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
