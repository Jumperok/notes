// import React from 'react';
// import { connect } from 'react-redux';
// import { changeTaskStatus, removeTask } from '../actions';
// import Card from './Card';
//
// const ListContainer = ({
//     status,
//     children,
//     tasks,
//     changeStatus,
//     remove
//   }) => (
//     <div className={`list ${status.toLowerCase()}-list`}>
//         <h5>{children} <span>{tasks.length}</span></h5>
//
//         {tasks.map((task) =>
//             <Card
//                 key={task.id}
//                 {...task}
//                 onChangeClick={changeStatus}
//                 onRemoveClick={remove}
//             />
//         )}
//     </div>
//   );
//
//
//
//
//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         tasks: state.filter(t => t.status === ownProps.status)
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeStatus: (id) => {
//             dispatch(changeTaskStatus(id));
//         },
//         remove: (id) => {
//             dispatch(removeTask(id));
//         }
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ListContainer);

import React from 'react';
import { connect } from 'react-redux';
//import { changeTaskStatus, removeTask } from '../actions';
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
// <Card
//     key={task.id}
//     {...task}
// />
  export default connect(
    (state, ownProps) => ({
      tasks: state.tasks.filter(t => t.status === ownProps.status)
    }),
    dispatch => ({
      changeTaskStatus: (id, newNote) => {
        //dispatch({ type: 'FETCH_NOTES', payload: {nams:'dasd'}});
        dispatch(noteActions.changeTaskStatus(id, newNote));
      },
      deleteTask: (id) => {
        dispatch(noteActions.deleteTask(id));
      }
    })
  )(ListContainer);
