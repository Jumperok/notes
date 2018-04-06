import constants from '../constants';
const { FETCH_NOTES_PENDING, FETCH_NOTES_FULFILLED, FETCH_NOTES_REJECTED } = constants;

const INITIAL_STATE = {
  tasks: [],
  isFetching: false,
  fetchingError: null
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_FULFILLED:
      return {
        ...state,
        tasks: action.payload.data.Notes,
        isFetching: false,
        fetchingError: null
      }
    case FETCH_NOTES_PENDING:
      return {
        ...state,
        isFetching: true,
        fetchingError: false
      }
    case FETCH_NOTES_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchingError: true
      }
  }
  return state;
}

export default notes;
