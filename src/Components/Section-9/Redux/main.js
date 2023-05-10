console.log(Redux);
console.log(ReduxThunk);
// import createStore from 'redux';


// Constants
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSITE_MONEY = "DEPOSITE_MONEY";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";


// ------------------------------------ Action Creator --------------------------------

// Action Creator => Trigger Function To Create Action 
const withdraw = (amount) => {
    return {
        type: WITHDRAW_MONEY,
        payload: amount
    };
};

const deposite = function(amount) {
    return {
        type: DEPOSITE_MONEY,
        payload: amount
    };
};

const addProduct = function(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

const getProduct = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    };
};

const fetchProduct = () => {
    return async (dispatch) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(getProduct(data));
    };
};
// -------------------------------------------- Reducers -----------------------------------------

// The reducer function is responsible for updating the state of the application in response to dispatched actions
// the Initial state  , an action object  => a new state based on the action type
const bankReducer = (state = 1000, action) => {
    switch (action.type) {
        case WITHDRAW_MONEY:
            return state - action.payload;
        case DEPOSITE_MONEY:
            return state + action.payload;
        default:
            return state;
    }
};

const productReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [...action.payload];
        case ADD_PRODUCT:
            // Never Change The State Directly 
            return [...state, action.payload];
        default:
            return state;
    }
};

// Multiply Reducers
const appReducer = Redux.combineReducers({
    bank: bankReducer,
    products: productReducer
});


// --------------------------------------------- Store ----------------------------------------

// Reducer Manipulate of the Store
// Take Single Reducer
const store = Redux.createStore(appReducer, Redux.applyMiddleware(ReduxThunk));

console.log(store);
console.log(store.getState()); // 1000

// ---------------------------------------------- Dispatch ------------------------------------
// dispatch | Triggering | Fire To Action

// store.dispatch(withdraw(100)); // -100
// store.dispatch(withdraw(100)); // -100
// console.log(store.getState()); // 800
// store.dispatch(deposite(500)); // +500
// console.log(store.getState()); // 1300
// store.dispatch(addProduct({id: 1, title: "PRODUCT-1"})); // +500
// console.log(store.getState()); // 1300 Array(1)
// store.dispatch(addProduct({id: 2, title: "PRODUCT-2"})); // +500
// console.log(store.getState()); // 1300 Array(2)

let amountInput = document.querySelector("#amount");
let amountValue = document.querySelector("#value");
amountValue.innerHTML = store.getState().bank;
document.querySelector("#withdraw").addEventListener("click", () => {
    store.dispatch(withdraw(+amountInput.value));
});
document.querySelector("#deposite").addEventListener("click", () => {
    store.dispatch(deposite(+amountInput.value));
});

// ---------------------------------------------- Subscribe ------------------------------------

// Subscribe => if any change happen in state will return subscribe (every dispatch)
// getState()=> Work Once  && Subscribe => when any change happen in state will work
// Subscibe take listener(Callback)
store.subscribe(() => {
    console.log("CURRENT STATE", store.getState());
    amountValue.innerHTML = store.getState().bank;
});
