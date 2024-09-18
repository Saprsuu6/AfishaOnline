import './AddBlock.css';

import React from 'react';

interface AddBlockProps {
  mainContainerClass: string;
}

const AddBlock: React.FC<AddBlockProps> = ({ mainContainerClass }) => {
  return <div className={`add_block ${mainContainerClass}`}>AddBlock</div>;
};

export default AddBlock;
