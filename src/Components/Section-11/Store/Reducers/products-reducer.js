import {ADD_PRODUCT, GET_PRODUCTS} from "../Actions/products-action";


const productReducer = (state = [{id: 1, title: "Product1"}], action) => {
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
export default productReducer;