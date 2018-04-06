import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES, FETCH_NOTES_PENDING, FETCH_NOTES_FULFILLED, FETCH_NOTES_REJECTED } = constants; // ???? why not like above

const noteActions = { //we can return object instead of function because of promise middleware
  loadNotes() {
    return { type: FETCH_NOTES, payload: api.getNotesFromAPI() };
  },
  
  addNote(Note) {
    return dispatch => {
      api.addNotesAPI(Note)
      .then(() => 
        dispatch(this.loadNotes())
      );
    }
  },
  
  changeTaskStatus(id, newNote) {
    return dispatch => {
      api.changeTaskStatusAPI(id, newNote)
      .then(() => 
        dispatch(this.loadNotes())
      );
    }
  },
  
  deleteTask(id) {
    return dispatch => {
      api.deleteTaskAPI(id)
      .then(() => 
        dispatch(this.loadNotes())
      );
    }
  }
  
};

export default noteActions;