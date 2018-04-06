import React from 'react';
import noteActions from '../actions';
import { connect } from 'react-redux';

const AddTaskPanelContainer = ({ addTask }) => {
  let inputText, inputExecutor;

  const submitTask = e => {
    e.preventDefault();

    if (!inputText.value.trim())
      return;

    let newNote = {
      executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
      text: inputText.value,
      status: 'TODO'
    };

    addTask(newNote);

    inputText.value = '';
    inputExecutor.value = '';
  }

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

export default connect(
  state => ({}),
  dispatch => ({
    addTask: (newNote) => {
      dispatch(noteActions.addNote(newNote));
    }
  })
)(AddTaskPanelContainer);
