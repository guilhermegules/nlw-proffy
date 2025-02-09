import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';
import { PageHeaderProps } from '../../interfaces/page-header.interface';

import './styles.css';

const PageHeader: FC<PageHeaderProps> = ({ title, children, description }) => (
  <header>
    <div className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>
    </div>
  </header>
);

export default PageHeader;
