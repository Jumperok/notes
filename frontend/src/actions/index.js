import constants from '../constants';
//import { FETCH_NOTES } from '../constants';
import api from '../api';

const { FETCH_NOTES } = constants; // ???? why not like above

const noteActions = {
  loadNotes() {
    return dispatch => {
      api.getNotesFromAPI()
      .then(data => {
        console.log(data);
        dispatch({ 
          type: FETCH_NOTES, 
          payload: data.Notes
        })
      });
    }  
  }
};

export default noteActions;