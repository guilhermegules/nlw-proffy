import React, { FC } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { ClassItemProps } from '../../interfaces/teacher-item.interface';

import './styles.css';
import api from '../../services/proffy-services';

const TeacherItem: FC<ClassItemProps> = ({ teacher }) => {
  const createConnection = () => {
    api.post('connections', {
      userId: teacher.id,
    });
  };

  const convertCurrency = (cost: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(cost);
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>{convertCurrency(teacher.cost)}</strong>
        </p>
        <a target="_blank" rel="noreferrer" onClick={createConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          <span>Entrar em contato</span>
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
