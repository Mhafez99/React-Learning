import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});


export const productsSlice = createSlice({
    initialState: [{id: 1, title: "product-1"}],
    name: "productsSlice",
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchProducts.pending, (state, action) => {
        //     // Show Loader Here
        // });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // Logic Here
            return action.payload;
        });
        // builder.addCase(fetchProducts.rejected, (state, action) => {
        //     // Show Loader Here
        // });
    }
});
export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;