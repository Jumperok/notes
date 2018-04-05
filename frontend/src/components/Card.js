// import React from 'react';
//
// const Card = ({
//     id,
//     text,
//     executor,
//     onChangeClick,
//     onRemoveClick
// }) => {
//     return (
//         <div className="project-card" onClick={() => onChangeClick(id)}>
//             <p className="card-text">{text}</p>
//             <span className="card-executor">{executor}</span>
//             <span className="card-remove" onClick={() => onRemoveClick(id)}>-</span>
//         </div>
//     );
// };
//
// export default Card;

import React from 'react';

const Card = ({id, text, executor, deleteTask, status, changeTaskStatus}) => {
  const statuses = ['TODO','DOING','DONE'];

  let statusNum = statuses.indexOf(status);
  const nextStatus = statusNum === 2 ? statuses[0] : statuses[statusNum + 1];

  let newNote = {
    executor: executor,
    text: text,
    status: nextStatus
  };

  return (
    <div className="project-card" onClick={() => {changeTaskStatus(id, newNote)}}>
      <p className="card-text">{text}</p>
      <span className="card-executor">{executor}</span>
      <span className="card-remove" onClick={() => deleteTask(id)}>-</span>
    </div>
  );
};

export default Card;
