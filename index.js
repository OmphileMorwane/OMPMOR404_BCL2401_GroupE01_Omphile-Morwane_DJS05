const initialState = {
  count: 0,
};

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

//Store implementation
function createStore(reducer) {
  let currentState = initialState;
  let listeners = [];

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducer(currentState, action);
      listeners.forEach(listener => listener());
  },
  sunscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(1 => 1 !== listener);
    };
  }
};
}

const store = createStore(reducer);

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
