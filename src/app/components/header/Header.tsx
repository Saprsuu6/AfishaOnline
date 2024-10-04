import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';

interface HeaderProps {
  mainContainerClass: string;
}

const Header: React.FC<HeaderProps> = ({ mainContainerClass }) => {
  return (
    <header className={`header ${mainContainerClass}`}>
      <nav>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.addPost}>Add post (only admins)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
