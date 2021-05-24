import React from 'react';

import './style.css';

const About: React.FC = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Technical Skills:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>React, react-router</li>
          <li>JavaScript (ES6+)</li>
          <li>Redux, redux-thunk, react-redux</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Webpack</li>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
      </div>
    </div>
  );
};

export default About;
