const initialState = {
  count: 0,
};

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
    dispatch: (action) => {
      currentState = reducer(currentState, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    },
  };
}

//Function that creates a store
const store = createStore(reducer);

//Subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

//Initial state verification
console.log(store.getState());

//Scenario 2: Incrementing counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });

//Scenario 3: Decrementing the counter
store.dispatch({ type: SUBTRACT });

//Scenario 4: Resetting the counter
store.dispatch({ type: RESET });
