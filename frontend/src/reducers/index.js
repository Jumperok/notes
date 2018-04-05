import constants from '../constants';
const { FETCH_NOTES_FULFILLED, ADD_NOTE } = constants;

const INITIAL_STATE = {
  tasks: [],
  isFetching: false,
  fetchingError: null
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_FULFILLED:
      return {
        // ...state,
        tasks: action.payload,
        isFetching: false,
        fetchingError: null
      }
      // {
      //   tasks: action.payload,
      //   isFetching: false,
      //   fetchingError: null
      // }
    case ADD_NOTE:
      return state;


  }
  return state;
}

export default notes;
