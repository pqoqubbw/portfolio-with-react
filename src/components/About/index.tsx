import React from 'react';

import './style.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>Обо мне</h1>
      <p>
        На данный момент учусь в ХНУГХ им. А.Н. Бекетова и работаю в прекрасной
        компании - QBeeS Solutions на позиции Junior React Developer.
      </p>
      <br />
      <p>
        В свободное время люблю смотреть мультфильмы в оригинале, советую к
        просмотру: Конь БоДжек, Рик И Морти, Полуночные Откровенния, Хвост Феи.
      </p>
      <br />
      <p>
        Больше о моих навыках и работах можете найти в моем <b>github</b>, а так
        же в <b>linkedin</b>.
      </p>
    </div>
  );
};

export default About;
