//state
//action-increment, decrement, reset
//reducer
//store

const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER';

// state 
const initialState = {
    users: ['Akash'],
    count: 1,
};

//action
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
};

const resetCounterAction = () => {
    return {
        type: RESET,
    }
};

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
};

const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
};

//reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state?.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state?.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state?.count + action.payload,
            }
        case ADD_USER:
            return {
                ...state,
                count: state?.count + 1,
                users: [...state.users, action.payload ]
            }
        default:
            state;
    };
};

//store
const store = createStore(counterReducer, initialState);

//view
store.subscribe(() => {
    console.log(store.getState());
});

//actionDispatch
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());

//checkout payload
// store.dispatch(incrementCounterByValue(10));
// store.dispatch(incrementCounterByValue(5));

//add user by the payload
store.dispatch(addUserAction('Aurna'));
store.dispatch(addUserAction('Hemme'));


