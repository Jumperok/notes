import React from 'react';
import AddTaskPanel from '../components/AddTaskPanel';
import Actions from '../actions';
import { connect } from 'react-redux';

// class AddTaskPanelContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//
//
//   render() {
//     return <AddTaskPanel />;
//   }
// }

export default connect(
  state => ({
    mappedState: state
  }),
  dispatch => ({
    addTask: (Note) => {
      //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
      //dispatch(Actions.loadNotes());
      dispatch(Actions.addNote(Note));
    }
  })
)(AddTaskPanel);
