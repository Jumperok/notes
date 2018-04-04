import React from 'react';
// onSubmit={submitTask}
const AddTaskPanel = ({ addTask }) => {
  let inputText, inputExecutor;

  const submitTask = (e) => {
    e.preventDefault();

    if (!inputText.value.trim())
      return;

    let newNote = {
      executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
      text: inputText.value,
      status: 'todo'
    };

    //console.log(inputExecutor.value, inputText.value);

    addTask(newNote);
    // dispatch(addTask({
    //     text: inputText.value,
    //     executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
    // }));

    inputText.value = '';
    inputExecutor.value = '';
  };

  return (
    <div className="form-container">
      <form onSubmit={submitTask}>
        <input className="task-form-text" placeholder="New task..." ref={node => inputText = node} />
        <input className="task-form-executor" placeholder="Who..." ref={node => inputExecutor = node} />
        <input className="task-form-submit" type="submit" value="Add"/>
      </form>
    </div>
  );

};


export default AddTaskPanel;
