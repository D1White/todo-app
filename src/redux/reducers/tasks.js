const initialState = {
  task: [],
  isLoaded: false,
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED_TASK":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default tasks;