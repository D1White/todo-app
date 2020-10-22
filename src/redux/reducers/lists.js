const initialState = {
  list: [],
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default lists;