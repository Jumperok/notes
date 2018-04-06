import React from 'react';
//import AddTaskPanel from '../components/AddTaskPanel';
import noteActions from '../actions';
import { connect } from 'react-redux';
//
// class AddTaskPanelContainer extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   onSubmitTask(e) {
//     e.preventDefault();
//     let inputText, inputExecutor;
//     if (!inputText.value.trim())
//       return;
//
//     let newNote = {
//       executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
//       text: inputText.value,
//       status: 'todo'
//     };
//
//     console.log(newNote);
//
//     //addTask(newNote);
//     // dispatch(addTask({
//     //     text: inputText.value,
//     //     executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
//     // }));
//
//     inputText.value = '';
//     inputExecutor.value = '';
//   }
//
//
//   render() {
//     return <AddTaskPanel submitTask={ this.onSubmitTask }/>;
//   }
// }

//==============================================================================================
const AddTaskPanelContainer = ({ addTask }) => {
  let inputText, inputExecutor;

  const submitTask = e => {
    e.preventDefault();
    // console.log(e);

    if (!inputText.value.trim())
      return;

    let newNote = {
      executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
      text: inputText.value,
      status: 'TODO'
    };

    //console.log(newNote);

    addTask(newNote);
    // dispatch(addTask({
    //     text: inputText.value,
    //     executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
    // }));

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

//=============================================================================================
// const AddTaskPanelContainer = ({ addTask }) => {
//   let inputText, inputExecutor;
//
//   const onSubmitTask = e => {
//     e.preventDefault();
//     // console.log(e);
//
//     if (!inputText.value.trim())
//       return;
//
//     let newNote = {
//       executor: inputExecutor.value.trim() ? inputExecutor.value : 'All',
//       text: inputText.value,
//       status: 'todo'
//     };
//
//     console.log(newNote);
//
//     //addTask(newNote);
//     // dispatch(addTask({
//     //     text: inputText.value,
//     //     executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
//     // }));
//
//     inputText.value = '';
//     inputExecutor.value = '';
//   }
//
//   return (
//     <AddTaskPanel submitTask={ onSubmitTask }/>
//   );
//
// };
//=========================================================================================================

export default connect(
  state => ({
    mappedState: state
  }),
  dispatch => ({
    addTask: (Note) => {
      //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
      dispatch(noteActions.addNote(Note));
      //dispatch({ type: 'FETCH_NOTES', payload: noteActions.addNote(Note) });
      //dispatch(Actions.addNote(Note));
    }
  })
)(AddTaskPanelContainer);
