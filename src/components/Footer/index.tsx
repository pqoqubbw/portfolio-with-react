import React from 'react';

import './style.css';

import telegram from '../../assets/telegram.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="https://t.me/pqoqubbw" target="_blank" rel="noreferrer">
        <img src={telegram} alt="telegram" />
      </a>
      <a
        href="https://www.instagram.com/pqoqubbw/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/pqoqubbw" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/pqoqubbw/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
    </footer>
  );
};

export default Footer;
