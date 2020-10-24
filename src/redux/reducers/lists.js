const initialState = {
  list: [],
  activeList: null,
  activeListID: '',
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "SET_ACTIVE_LIST":
      return {
        ...state,
        activeList: action.payload,
      };
    case "SET_ACTIVE_LIST_ID":
      return {
        ...state,
        activeListID: action.payload,
      };
    default:
      return state;
  }
};

export default lists;