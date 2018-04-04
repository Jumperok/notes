import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES, ADD_NOTE } = constants; // ???? why not like above

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
    return {type: ADD_NOTE, payload: api.addNotesAPI(Note).then(payload => {return [1,2,3]})};
  }
  
  
};

export default noteActions;