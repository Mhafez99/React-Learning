import {useDispatch, useSelector} from "react-redux";
// import {addProduct, fetchProduct} from './Store/Actions/products-action';
import {useEffect} from "react";
import {addProduct, fetchProducts} from './RTK/Slices/products-slice';
function Products() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <>
            <h1>Products</h1>
            <button onClick={() => dispatch(addProduct({id: 2, title: "Product2"}))}>Add Product</button>
            {
                products.map((product) =>
                    (<h2 key={product.id}>{product.title}</h2>)
                )
            }
        </>
    );
}
export default Products;