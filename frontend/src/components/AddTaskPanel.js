import React from 'react';

const AddTaskPanel = ({ addTask, newTaskInputs, setExecutor, setDescription }) => {
  const handleExecutorChange = e => {
    let executor = e.target.value;
    setExecutor(executor);
  };

  const handleDescriptionChange = e => {
    let description = e.target.value;
    setDescription(description);
  };

  const submitTask = e => {
    e.preventDefault();
    if (newTaskInputs.description.trim()) {
      addTask(newTaskInputs);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submitTask}>
        <input className="task-form-text" placeholder="New task..." value={newTaskInputs.description} onChange={handleDescriptionChange}/>
        <input className="task-form-executor" placeholder="Who..." value={newTaskInputs.executor} onChange={handleExecutorChange}/>
        <input className="task-form-submit" type="submit" value="Add"/>
      </form>
    </div>
  );

};

export default AddTaskPanel;
