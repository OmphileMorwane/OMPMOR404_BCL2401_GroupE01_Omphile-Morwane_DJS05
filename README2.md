### How to run code: 

1. Clone the repository on VS code
2. Run the following command in the terminal:
node Index.js

### Coding Approach 

I defined the initial state object that contains a 'count' property initialized to '0'. I then added action types which I defined as 'add', 'subtract' and 'reset' and the reducer function which is implemented to handle state updates based on the dispatched actions. It takes the current state and an action as an input, and returs a new state based on the action type. I then implemented the createstore  to create a Redux-like store which maintains the current state, dispatches actions to update the state and then handles the subscritions for the state changes. The subscribe method was the implemeneted to allow components to subscribe to state changes.I then dispatches the various actions to test all the required scenarios i.e initialization, incrementing, decrementing and resetting the counter and finally I logged the data by subscribing to state changes and logginf the updates states to the console.

### Challenges faced

Implementing a createstore fubction was something new to me, I just had to research on it so that I was able to apply it on this project. Initially, I had not added it and after thoroughly reading the proejct requirements I then had to implement it and change my code accordingly, but over all I enjoyer coding this project. I have also realized that I understand code better than I did before.


