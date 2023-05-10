import {createSlice} from '@reduxjs/toolkit';
export const bankSlice = createSlice({
    initialState: 1000,
    name: 'bankSlice',
    reducers: {
        // ActioN Method To Apply On Actions 
        withdraw: (state, action) => {
            return state - action.payload;
        },
        deposite: (state, action) => {
            return state + action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
export const {withdraw, deposite} = bankSlice.actions;
export default bankSlice.reducer;