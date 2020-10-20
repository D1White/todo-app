const initialState = {
  user: {},
  isLoaded: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED_USER":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default user;
