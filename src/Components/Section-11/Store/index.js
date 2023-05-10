import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import bankReducer from './Reducers/bank-reducer';
import productReducer from './Reducers/products-reducer';
const appReducer = combineReducers({
    bank: bankReducer,
    products: productReducer
});
export const store = createStore(appReducer, applyMiddleware(thunk));