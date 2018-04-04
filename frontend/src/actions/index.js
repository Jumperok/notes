import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES } = constants; // ???? why not like above

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
  }
};

export default noteActions;