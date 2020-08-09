import React, { FC } from 'react';

import { TextAreaProps } from '../../interfaces/textarea.interface';

import './styles.css';

const TextArea: FC<TextAreaProps> = ({ label, name, ...attributes }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...attributes}></textarea>
  </div>
);

export default TextArea;
