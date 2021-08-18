const INITIAL_STATE = {
  clima: 'chuvoso',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;