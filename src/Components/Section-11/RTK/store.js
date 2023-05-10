import {configureStore} from '@reduxjs/toolkit';
import BankReducer from './Slices/bank-slice';
import ProductsSlice from './Slices/products-slice';
export const store = configureStore({
    reducer: {
        bank: BankReducer,
        products: ProductsSlice
    },
    devTools: true
});