const notes = (state = [], action) => {
  if(action.type === 'FETCH_NOTES') {
    return [...state, action.payload];
  }
  return state;
}

export default notes;
