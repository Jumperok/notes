import constants from '../constants';
const { SET_EXECUTOR,
        SET_DESCRIPTION,
        ADD_NOTE_PENDING
      } = constants;

const INITIAL_STATE = {
  executor: '',
  description: ''
};

const inputs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE_PENDING:
      return {
        ...state, description: '', executor: ''
      }
    case SET_EXECUTOR:
      return {
        ...state, executor: action.payload
      }
    case SET_DESCRIPTION:
      return {
        ...state, description: action.payload
      }
    default:
      return state;
  }
}

export default inputs;
