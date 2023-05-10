import {DEPOSITE_MONEY, WITHDRAW_MONEY} from "../Actions/bank-actions";

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
export default bankReducer;