import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import noteActions from '../actions';

export default connect(
  (state, ownProps) => ({
    tasks: state.tasks.filter(t => t.status === ownProps.status)
  }),
  dispatch => ({
    changeTaskStatus: (id, newNote) => {
      dispatch(noteActions.changeTaskStatus(id, newNote));
    },
    deleteTask: (id) => {
      dispatch(noteActions.deleteTask(id));
    }
  })
)(List);
