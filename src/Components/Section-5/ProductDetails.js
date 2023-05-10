import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
    const api_url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`).then((response) => response.json()).then((product) => setProduct(product));
    }, []);
    return (
        <div className="w-50 m-auto">
            <Product product={product} showButton={false} />
        </div>
    );
}
export default ProductDetails;