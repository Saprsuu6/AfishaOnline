import './Header.css';

import React from 'react';

interface HeaderProps {
  mainContainerClass: string;
}

const Header: React.FC<HeaderProps> = ({ mainContainerClass }) => {
  return <div className={`header ${mainContainerClass}`}>Header</div>;
};

export default Header;
