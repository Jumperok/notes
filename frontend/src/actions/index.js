import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, CHANGE_TASK_STATUS } = constants; // ???? why not like above

const noteActions = { //we can return object instead of function because of promise middleware
  // loadNotes() {
  //   return dispatch => {
  //     api.getNotesFromAPI()
  //     .then(data => {
  //       console.log(data);
  //       dispatch({ 
  //         type: FETCH_NOTES, 
  //         payload: data.Notes
  //       })
  //     });
  //   }  
  // }
  loadNotes() {
    // api.getNotesFromAPI()
    // .then(data => {
    // 
    // })
    return {type: FETCH_NOTES, payload: api.getNotesFromAPI().then(payload => {return payload.data.Notes})};
  },
  
  addNote(Note) {
    console.log("from actions", Note);
    return {type: ADD_NOTE, payload: api.addNotesAPI(Note).then(payload => {return payload.data.Note})};
  },
  
  changeTaskStatus(id, newNote) {
    return {type: CHANGE_TASK_STATUS, payload: api.changeTaskStatusAPI(id, newNote).then(payload => {return payload.data.Note})};
  },
  
  deleteTask(id) {
    return {type: DELETE_NOTE, payload: api.deleteTaskAPI(id).then(payload => {return payload.data.Note})};
  }
  
  
};

export default noteActions;