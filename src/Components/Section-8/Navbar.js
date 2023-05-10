import {useContext} from "react";
import {ProductsContext} from "./ContextApi-8/ProductsContext";
import {useRecoilState} from "recoil";
import productsState from "./Atoms/Products-atom";


function Navbar() {
    // const value = useContext(ProductsContext); // Consummer
    const [products, setProducts] = useRecoilState(productsState);
    return (
        <div className="navbar">
            <h1>Products Count : {products.length}</h1>
        </div>
    );
}
// Another Component
// As Property inside function Object
// as component

Navbar.Toggle = function() {
    console.log("Toggle");
};
export default Navbar;