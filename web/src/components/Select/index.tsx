import React, { FC } from 'react';

import './styles.css';
import { SelectProps } from '../../interfaces/select.interface';

const Select: FC<SelectProps> = ({ label, name, options, ...attributes }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select id={name} {...attributes}>
      <option value="" disabled selected hidden>
        Selecione uma opção
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
