import constants from '../constants';
const { FETCH_NOTES_PENDING, FETCH_NOTES_FULFILLED, FETCH_NOTES_REJECTED, ADD_NOTE_PENDING,
        ADD_NOTE_FULFILLED, ADD_NOTE_REJECTED, CHANGE_STATUS_PENDING, CHANGE_STATUS_FULFILLED,
        CHANGE_STATUS_REJECTED, DELETE_NOTE_PENDING, DELETE_NOTE_FULFILLED, DELETE_NOTE_REJECTED,
        SET_EXECUTOR, SET_DESCRIPTION} = constants;

const INITIAL_STATE = {
  tasks: [],
  isFetching: false,
  fetchingError: false,
  newTaskInputs: {
    executor: '',
    description: ''
  }
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_PENDING:
      return {
        ...state,
        isFetching: true,
        fetchingError: false
      }
    case FETCH_NOTES_FULFILLED:
      return {
        ...state,
        tasks: action.payload.data.Notes,
        isFetching: false,
        fetchingError: false
      }
    case FETCH_NOTES_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchingError: true
      }
    case ADD_NOTE_PENDING:
      return {
        ...state,
        isFetching: true,
        fetchingError: false,
        newTaskInputs: {...state.newTaskInputs, description: '', executor: ''}
      }
    case ADD_NOTE_FULFILLED:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.data.Note],
        isFetching: false,
        fetchingError: false
      }
    case ADD_NOTE_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchingError: true
      }
    case CHANGE_STATUS_PENDING:
      return {
        ...state,
        isFetching: true,
        fetchingError: false
      }
    case CHANGE_STATUS_FULFILLED:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task._id !== action.payload.data.Note._id ?
          task :
          {...task, status: action.payload.data.Note.status};
        }),
        isFetching:false,
        fetchingError: false,
      }
    case CHANGE_STATUS_REJECTED:
      return {
        ...state,
        isFetching:false,
        fetchingError: true,
      }
    case DELETE_NOTE_PENDING:
      return {
        ...state,
        isFetching: true,
        fetchingError: false
      }
    case DELETE_NOTE_FULFILLED:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task._id === action.payload.data.id ? false : true;
        }),
        isFetching:false,
        fetchingError: false,
      }
    case DELETE_NOTE_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchingError: true
      }
    case SET_EXECUTOR:
      return {
        ...state,
        newTaskInputs: {...state.newTaskInputs, executor: action.payload}
      }
    case SET_DESCRIPTION:
      return {
        ...state,
        newTaskInputs: {...state.newTaskInputs, description: action.payload}
      }
  }
  return state;
}

export default notes;
