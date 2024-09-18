import './AfishaLiat.css';

import React from 'react';

interface AfishaListProps {
  mainContainerClass: string;
}

const AfishaList: React.FC<AfishaListProps> = ({ mainContainerClass }) => {
  return <div className={`afisha_list ${mainContainerClass}`}>AfishaList</div>;
};

export default AfishaList;
