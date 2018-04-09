import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES, ADD_NOTE, CHANGE_STATUS, DELETE_NOTE, SET_EXECUTOR, SET_DESCRIPTION } = constants; // ???? why not like above

const noteActions = { //we can return object instead of function because of promise middleware
  loadNotes() {
    return { type: FETCH_NOTES, payload: api.getNotesFromAPI() };
  },

  addNote(newTaskInputs) {

    let newNote = {
      executor: newTaskInputs.executor.trim() ? newTaskInputs.executor : 'All',
      text: newTaskInputs.description,
      status: 'TODO'
    };

    return { type: ADD_NOTE, payload: api.addNotesAPI(newNote) };
  },

  changeTaskStatus(id, executor, text, status) {

    const statuses = ['TODO','DOING','DONE'];

    let statusNum = statuses.indexOf(status);
    const nextStatus = statusNum === 2 ? statuses[0] : statuses[statusNum + 1];

    let newNote = {
      executor,
      text,
      status: nextStatus
    };

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
