import './RunningLine.css';

import React from 'react';

interface RunningLineProps {
  mainContainerClass: string;
}

const RunningLine: React.FC<RunningLineProps> = ({ mainContainerClass }) => {
  return <div className={`running_line_block ${mainContainerClass}`}>RunningLine</div>;
};

export default RunningLine;
