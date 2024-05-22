// ### SCENARIO 1: Initial State Verification
// ```
// GIVEN no interactions have been performed yet
// WHEN the “getState” method is run
// AND the result is logged to the console
// AND the browser console is open
// THEN the state should show a count of 0

const initialState = {
  count: 0
};

function getState() {
  return initialState;
}
console.log(getState());

