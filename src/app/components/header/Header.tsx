import './Header.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import routes from '../../routes';

interface HeaderProps {
  mainContainerClass: string;
}

const Header: React.FC<HeaderProps> = ({ mainContainerClass }) => {
  const { logOut } = useAuth();
  const location = useLocation(); // Получаем текущий маршрут

  // Условие для отображения кнопки "Log out" только на конкретном маршруте
  const showLogoutButton = location.pathname === routes.addPost;

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
          {showLogoutButton && (
            <li>
              <button onClick={() => logOut()}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
