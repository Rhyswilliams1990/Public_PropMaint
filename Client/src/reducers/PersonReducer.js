const INITIAL_STATE = {
  all: [],
  selectedPage: 'overview',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_SUCCESS':
      return { ...state, all: action.payload };
    case 'MENU_SELECTION':
      return { ...state, selectedPage: action.payload };
    default:
      return state;
  }
};
