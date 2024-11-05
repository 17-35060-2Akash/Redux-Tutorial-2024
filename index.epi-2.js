// define constants 
const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const ADD_USER='ADD_USER';

//state

const initialCounterState={
    count: 0,
}
const initialUsersState={
    users: [
        {name: 'N A Akash'},
    ],
}

//action
const incrementCounter =()=>{
  return {
    type: INCREMENT,
  }
};
const decrementCounter =()=>{
  return {
    type: DECREMENT,
  }
};

const addUser=()=>{
    return {
        type: ADD_USER,
        payload:{
            name: 'Akash'
        }
    } 
};
