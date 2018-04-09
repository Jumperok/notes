import React from 'react';
import noteActions from '../actions';
import AddTaskPanel from '../components/AddTaskPanel';
import { connect } from 'react-redux';

const mapDispatchToProps = {
  addTask: noteActions.addNote,
  setExecutor: noteActions.setExecutor,
  setDescription: noteActions.setDescription,
};

export default connect(
  state => ({
    newTaskInputs: state.inputs
  }),
  mapDispatchToProps
)(AddTaskPanel);

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
