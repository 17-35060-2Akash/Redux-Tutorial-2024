const { createStore, combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

//carts constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

//product states
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
};

//cart states
const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1,
};

//product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
};

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

//cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
};

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product,
    };
};

//productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state?.products, action?.payload],
                numberOfProducts: state?.numberOfProducts + 1
            }
        default:
           return state;
    }
};

//cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEM:
            return {
                cart: [...state?.cart, action?.payload],
                numberOfProducts: state?.numberOfProducts + 1
            }
        default:
           return state;
    }
};

const rootReducer=combineReducers({
   productR: productReducer,
   cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

/* store.dispatch(getProducts());
store.dispatch(addProducts('pen')); */
store.dispatch(getCart());
store.dispatch(addCart('pen'));




