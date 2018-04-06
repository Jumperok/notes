import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

export default connect(
  state => ({
    tasksAmount: state.tasks.length
  })
)(Title);







// const mapStateToProps = state => {
//   tasksAmount: state.length
// };



// export default connect(
//   state => ({
//     mappedState: state
//   }),
//   dispatch => ({
//     getTasks: () => {
//       //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
//       dispatch(noteActions.loadNotes());
//     }
//   })
// )(App);
