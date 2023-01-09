// This is the reducer file for the counter component
// ACTIONS is an object that contains the actions that can be performed on the state
export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SETVALUE: "SETVALUE",
};
// Reducer is a function that takes in the state and the action to be performed on the state
const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    case ACTIONS.SETVALUE:
      return { count: action.payload };

    case ACTIONS.RESET:
      return { count: 0 };

    default:
      return { state };
  }
};

export default Reducer;
