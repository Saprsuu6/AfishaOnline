import './Footer.css';

import React from 'react';

interface FooterProps {
  mainContainerClass: string;
}

const Footer: React.FC<FooterProps> = ({ mainContainerClass }) => {
  return <div className={`footer ${mainContainerClass}`}>Footer</div>;
};

export default Footer;
