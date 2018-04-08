import React from 'react';
import noteActions from '../actions';
import { connect } from 'react-redux';

const AddTaskPanelContainer = ({ addTask, newTaskInputs, setExecutor, setDescription }) => {
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

    if (!newTaskInputs.description.trim())
      return;

    let newNote = {
      executor: newTaskInputs.executor.trim() ? newTaskInputs.executor : 'All',
      text: newTaskInputs.description,
      status: 'TODO'
    };

    addTask(newNote);
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

const mapDispatchToProps = {
  addTask: noteActions.addNote,
  setExecutor: noteActions.setExecutor,
  setDescription: noteActions.setDescription,
};

export default connect(
  state => ({
    newTaskInputs: state.newTaskInputs
  }),
  mapDispatchToProps
)(AddTaskPanelContainer);

// dispatch => ({
//   addTask: (newNote) => {
//     dispatch(noteActions.addNote(newNote));
//   },
//   setExecutor: (executor) => {
//     dispatch(noteActions.setExecutor(executor));
//   },
//   setDescription: (description) => {
//     dispatch(noteActions.setDescription(description));
//   }
// })
