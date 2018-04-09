import React from 'react';

const Card = ({id, text, executor, deleteTask, status, changeTaskStatus}) => {

  const handleDeleteClick = e => {
    e.stopPropagation();
    deleteTask(id);
  };

  const handleChangeStatus = () => {
    changeTaskStatus(id, executor, text, status);
  };

  return (
    <div className="project-card" onClick={handleChangeStatus}>
      <p className="card-text">{text}</p>
      <span className="card-executor">{executor}</span>
      <span className="card-remove" onClick={handleDeleteClick}>-</span>
    </div>
  );
};

export default Card;
