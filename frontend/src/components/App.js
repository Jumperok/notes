import React from 'react';
import TitleContainer from '../containers/TitleContainer';
import AddTaskPanelContainer from '../containers/AddTaskPanelContainer';
// import Board from './Board';

const App = () => (
  <div>
    <TitleContainer />
    <AddTaskPanelContainer />
  </div>
);

export default App;



//<Board />

//import ReactDOM from 'react-dom';
// import noteActions from '../actions';
// import { connect } from 'react-redux';

// const App = (props) => {
//   const data = getData();
//   return (
//     <div>data</div>
//   );
// }




// class App extends React.Component {
//   componentDidMount() {
//     this.props.getTasks();
//   }
//
//   render() {
//     console.log("store", this.props.mappedState);
//     return (
//       <div>
//         <Title />
//       </div>
//     );
//   }
// }
//
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
