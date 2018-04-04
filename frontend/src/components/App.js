import React from 'react';
import ReactDOM from 'react-dom';
import noteActions from '../actions';
import { connect } from 'react-redux';

// const App = (props) => {
//   const data = getData();
//   return (
//     <div>data</div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    this.props.getFokedData();
  }

  render() {
    console.log("store", this.props.store);
    return (
      <div>data</div>
    );
  }
}

// const App = (props) => {
//   const data = getData();
//   console.log(data);
//   return (
//     <div>data</div>
//   );
// }

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    getFokedData: () => {
      //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
      dispatch(noteActions.loadNotes());
    }
  })
)(App);
