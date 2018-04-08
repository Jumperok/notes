import React from 'react';

const Card = ({id, text, executor, deleteTask, status, changeTaskStatus}) => {
  const statuses = ['TODO','DOING','DONE'];

  let statusNum = statuses.indexOf(status);
  const nextStatus = statusNum === 2 ? statuses[0] : statuses[statusNum + 1];

  let newNote = {
    executor,
    text,
    status: nextStatus
  };

  const handleDeleteClick = e => {
    e.stopPropagation();
    deleteTask(id);
  }

  return (
    <div className="project-card" onClick={() => {changeTaskStatus(id, newNote)}}>
      <p className="card-text">{text}</p>
      <span className="card-executor">{executor}</span>
      <span className="card-remove" onClick={handleDeleteClick}>-</span>
    </div>
  );
};

export default Card;
