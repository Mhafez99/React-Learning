
export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const addProduct = function(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

export const getProduct = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    };
};
export const fetchProduct = () => {
    return async (dispatch) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(getProduct(data));
    };
};
