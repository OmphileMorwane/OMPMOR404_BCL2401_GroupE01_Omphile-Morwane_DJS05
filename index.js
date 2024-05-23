//SCENARIO 1: Initial State Verification
const initialState = {
  count: 0,
};
console.log(initialState);

//SCENARIO 2: Incrementing The Counter
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return {count: state.count - 1};
      default:
        return state;
  }
}

function dispatch(action) {
  currentState = reducer(currentState, action);
}

let currentState = initialState;

function getState() {
  return currentState;
}

dispatch({ type: ADD });
console.log(getState());

dispatch({ type: ADD });
console.log(getState());

dispatch({ type: SUBTRACT });
console.log(getState());
