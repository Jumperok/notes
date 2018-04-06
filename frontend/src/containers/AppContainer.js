import React from 'react';
import TitleContainer from './TitleContainer';
import AddTaskPanelContainer from './AddTaskPanelContainer';
import Board from '../components/Board';
import noteActions from '../actions';
import { connect } from 'react-redux';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    return (
      <div>
        <TitleContainer />
        <AddTaskPanelContainer />
        <Board />
      </div>
    );
  }
}


export default connect(
  state => ({
    mappedState: state
  }),
  dispatch => ({
    getTasks: () => {
      //noteActions.loadNotes();
      //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
      dispatch(noteActions.loadNotes());
    }
  })
)(AppContainer);





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
