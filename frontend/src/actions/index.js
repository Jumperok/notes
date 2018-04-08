import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES, ADD_NOTE, CHANGE_STATUS, DELETE_NOTE, SET_EXECUTOR, SET_DESCRIPTION } = constants; // ???? why not like above

const noteActions = { //we can return object instead of function because of promise middleware
  loadNotes() {
    return { type: FETCH_NOTES, payload: api.getNotesFromAPI() };
  },

  addNote(Note) {
    return { type: ADD_NOTE, payload: api.addNotesAPI(Note) };
  },

  changeTaskStatus(id, newNote) {
    return { type: CHANGE_STATUS, payload: api.changeTaskStatusAPI(id, newNote) };
  },

  deleteTask(id) {
    return { type: DELETE_NOTE, payload: api.deleteTaskAPI(id) };
  },

  setExecutor(executor) {
    return { type: SET_EXECUTOR, payload: executor };
  },

  setDescription(description) {
    return { type: SET_DESCRIPTION, payload: description };
  }

};

export default noteActions;
