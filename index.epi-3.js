// /create reducer for actions 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//state
const initialCounterState = {
    count: 0,
}

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

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            state;
    }
}



