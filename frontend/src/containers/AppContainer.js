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
  null,
  dispatch => ({
    getTasks: () => {
      dispatch(noteActions.loadNotes());
    }
  })
)(AppContainer);
