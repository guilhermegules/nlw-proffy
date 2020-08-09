import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars1.githubusercontent.com/u/57363532?s=460&u=bc1ce0a102463206db28cbe781fff8ea497a9f30&v=4"
        alt="Guilherme Gules Moreira"
      />
      <div>
        <strong>Guilherme Gules Moreira</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida de pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/Hora <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp Icon" />
        <span>Entrar em contato</span>
      </button>
    </footer>
  </article>
);

export default TeacherItem;
