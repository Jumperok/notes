import React from 'react';
import List from '../containers/ListContainer';

const Board = () => (
    <div className="project-board">
        <List status="TODO">
            Todo tasks
        </List>
        <List status="DOING">
            Doing tasks
        </List>
        <List status="DONE">
            Done tasks
        </List>
    </div>
);

export default Board;
