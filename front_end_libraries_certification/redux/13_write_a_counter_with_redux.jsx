const INCREMENT = 'INCREMENT' // Define a constant for increment action types
const DECREMENT = 'DECREMENT' // Define a constant for decrement action types
const defaultState = 0
// Define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state = state + 1)
    case DECREMENT:
      return (state = state - 1)
    default:
      return defaultState
  }
}

// Define an action creator for incrementing
const incAction = () => {
  return { type: INCREMENT }
}

// Define an action creator for decrementing
const decAction = () => {
  return { type: DECREMENT }
}

const store = Redux.createStore(counterReducer)

store.dispatch(incAction)
store.dispatch(decAction)
