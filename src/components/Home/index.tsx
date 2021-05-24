import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import logoInfo from '../../assets/logoInfo.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Dima Tovstokory</p>
          <p>React developer</p>
        </h1>
        <Link to="about">
          <button>Больше информации обо мне</button>
        </Link>
      </div>
      <div className="person">
        <img src={logoInfo} alt="person 2" />
      </div>
    </div>
  );
};

export default Home;
