import React, { FC } from 'react';
import { InputProps } from '../../interfaces/input.interface';

import './styles.css';

const Input: FC<InputProps> = ({ label, name, ...attributes }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input type="text" id={name} {...attributes} />
  </div>
);

export default Input;
