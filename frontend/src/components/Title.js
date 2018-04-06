import React from 'react';

const Title = ({ tasksAmount }) => (
  <div className="project-info">
    <h1>Tasks Board</h1>
    <p>There are {tasksAmount} tasks on board</p>
    <span>Type task text and executor name. Click on card to move to another list.</span>
  </div>
);

export default Title;
