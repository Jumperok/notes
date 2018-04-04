import constants from '../constants';
const { FETCH_NOTES_FULFILLED } = constants;

const INITIAL_STATE = {
  tasks: [],
  isFetching: false,
  fetchingError: null
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_FULFILLED: 
      return {
        tasks: action.payload,
        isFetching: false,
        fetchingError: null
      }


  }
  return state;
}

export default notes;
