import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import noteActions from '../actions';

const mapDispatchToProps = {
  changeTaskStatus: noteActions.changeTaskStatus,
  deleteTask: noteActions.deleteTask
};

export default connect(
  (state, ownProps) => ({
    tasks: state.notes.tasks.filter(t => t.status === ownProps.status)
  }),
  mapDispatchToProps
)(List);
