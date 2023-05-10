import {atom} from "recoil";
// Recoil => Reaction Style
// Piece of state
const productsState = atom({
    key: 'productsState', // unique ID (with respect to other atoms/selectors)
    default: [ // default value (initial value)
        {id: 1, title: "product1"},
        {id: 2, title: "product2"},
        {id: 3, title: "product3"}
    ]
});
export default productsState;