import React from 'react';
import '../styles/pages/ClassRecording.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, } from '@fortawesome/free-solid-svg-icons';

const ClassRecording = () => {
  return (
    <div className="app">
      <h1>Class Recording Compilation</h1>
      <table className="class-record">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Link</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fri, May 26, AM</td>
            <td>Student Orientation - FT AM</td>
            <td>
              <a href="https://www.youtube.com/watch?v=FHnUaSm-Wm8" target="_blank" rel="noopener noreferrer" className="button">
                <FontAwesomeIcon icon={faVideo} /> Watch
              </a>
            </td>
            <td>Orientation only</td>
          </tr>
          <tr>
            <td>Tue, May 30, AM</td>
            <td>Class Introduction</td>
            <td>
              <a href="http://www.youtube.com/watch?v=CMGiRW-v03M" target="_blank" rel="noopener noreferrer" className="button">
                <FontAwesomeIcon icon={faVideo} /> Watch
              </a>
            </td>
            <td>Introduce yourself</td>
          </tr>
          {/* Add more rows here as needed */}
           
        </tbody>
      </table>
    </div>
  );
}

export default ClassRecording;
