import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import noteActions from '../actions';

const ListContainer = ({ tasks, status, children, deleteTask, changeTaskStatus }) => (
  <div>
    <h5>{children} <span>{tasks.length}</span></h5>

    {tasks.map((task) =>
      <Card
        key={task._id}
        id={task._id}
        text={task.text}
        status={status}
        executor={task.executor}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
    )}

  </div>
);

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
)(ListContainer);
