const initialState = {
  count: 0,
};

// function getState() {
//   return initialState;
// }
console.log(initialState);

//SCENARIO 2: Incrementing The Counter
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
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

dispatch({ type: RESET });
console.log(getState());
