import {useContext} from "react";
import {ProductsContext} from "./ContextApi-8/ProductsContext";
import {useRecoilState} from "recoil";
import productsState from "./Atoms/Products-atom";


function ProductsList() {
    // const products = useContext(ProductsContext); // Consummer of context
    const [products, setProducts] = useRecoilState(productsState);
    return (
        <div className="products-list">
            {
                products.map(p => <h1 key={p.id}>{p.title}</h1>)
            }
        </div>
    );
}
export default ProductsList;