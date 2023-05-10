import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from './Slices/products-slice';
import cartReducer from './Slices/cart-slice';

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: cartReducer
    }
});