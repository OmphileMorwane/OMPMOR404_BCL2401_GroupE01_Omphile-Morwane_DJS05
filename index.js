//Initial state of the store
const initialState = {
  count: 0,
};

//Action types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

//Reducer fucntions to handle actions and update state
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

//Store implementation using the reducer
function createStore(reducer) {
  let currentState = initialState;
  let listeners = [];
//Function to get current state and to dispatch actions then udate state
  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);//Function to update state
      listeners.forEach((listener) => listener()); //function to notify all listeners
    },
    //Function to subscribe to state changes, add listener to array and then remore listener from the array
    subscribe: (listener) => {
      listeners.push(listener); 
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    },
  };
}

//Creating the store using above implementation
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
