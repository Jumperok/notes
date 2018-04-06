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
    return { type: 'FETCH_NOTES', payload: api.getNotesFromAPI() };
    // .then(payload => {console.log(payload.data.Notes); return payload.data.Notes});
    
    
    
    // api.getNotesFromAPI()
    // .then(payload => {
    //   return {type: FETCH_NOTES, payload: payload.data.Notes};
    // });
    // return {type: FETCH_NOTES, payload: api.getNotesFromAPI().then(payload => {return payload.data.Notes})};
    
    
    
      // api.getNotesFromAPI()
      // .then(payload => {
      //   dispatch({type: FETCH_NOTES, payload: payload.data.Notes});
      // });
      
    
    
    
    
    // return dispatch => {
    //   api.getNotesFromAPI()
    //   .then(payload => {
    //     dispatch({type: FETCH_NOTES, payload: payload.data.Notes});
    //   });
    // }
    
    
    
  },
  
  addNote(Note) {
    return dispatch => {
      api.addNotesAPI(Note)
      .then(() => 
        dispatch(this.loadNotes())
      );
    }
    // return dispatch => {
    //   console.log("BEFORE ADD NOTE");
    //   api.addNotesAPI(Note)
    //   .then(() => 
    //     this.loadNotes()
    //   );
    // }
    // console.log("FROM HERE",Note);
    // return api.addNotesAPI(Note).then(() => {this.loadNotes()});
    
  },
  
  // addNote(Note) {
  //   console.log("from actions", Note);
  //   return {type: ADD_NOTE, payload: api.addNotesAPI(Note).then(payload => {return payload.data.Note})};
  // },
  
  changeTaskStatus(id, newNote) {
    return dispatch => {
      api.changeTaskStatusAPI(id, newNote)
      .then(() => 
        dispatch(this.loadNotes())
      );
    }
    // return {type: CHANGE_TASK_STATUS, payload: api.changeTaskStatusAPI(id, newNote).then(payload => {return payload.data.Note})};
  },
  
  deleteTask(id) {
    return dispatch => {
      api.deleteTaskAPI(id)
      .then(() => 
        dispatch(this.loadNotes())
      );
    // return {type: DELETE_NOTE, payload: api.deleteTaskAPI(id).then(payload => {return payload.data.Note})};
    }
  }
  
  
};

export default noteActions;