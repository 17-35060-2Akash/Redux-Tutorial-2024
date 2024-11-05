const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state 
const initialCounterState = {
    counter: 0,
};

//action
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
};

//reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            break;
    };
};

//store
const store = createStore(counterReducer, initialCounterState);

//view
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());


