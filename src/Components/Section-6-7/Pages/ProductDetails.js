import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.productID}`).then((response) => response.json()).then((product) => {
            setProduct(product);
        });
    }, [params.productID]);
    return (
        <>
            <div className="product text-center">
                <img className="w-50 h-385" src={product.image} alt=""/>
                <p className="fs-3 text-primary">Title : {product.title}</p><br />
                <p className="fs-2">Description : {product.description}</p><br />
                <span className="fs-2 fw-bold text-info">Price : {product.price}</span><br />
            </div>
        </>
    );
}
export default ProductDetails;