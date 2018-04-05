import React from 'react';
//import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';

const Board = () => (
    <div className="project-board">
        <ListContainer status="TODO">
            Todo tasks
        </ListContainer>
        <ListContainer status="DOING">
            Doing tasks
        </ListContainer>
        <ListContainer status="DONE">
            Done tasks
        </ListContainer>
    </div>
);

export default Board;
