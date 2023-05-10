import {useEffect, useState} from "react";
import Product from "./Product";
function ProductsList() {
    const apiUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(apiUrl).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    };
    const getCategories = () => {
        fetch(`${apiUrl}/categories`).then((response) => response.json()).then((data) => {
            setCategories(data);
        });
    };
    const getProductInCategory = (catName) => {
        fetch(`${apiUrl}/category/${catName}`).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    };
    useEffect(() => {
        getProducts();
        getCategories();
    }, []); // Dependency List
    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <div className="categories text-center p-3">
                    <button onClick={() => {getProducts();}} className="btn btn-outline-info ms-3">
                        All
                    </button>
                    {
                        categories.map((category) => {
                            return (
                                <button key={category} onClick={() => {getProductInCategory(category);}} className="btn btn-outline-info ms-3">
                                    {category}
                                </button>
                            );
                        })
                    }
                </div>
                <div className="row">
                    {products.map((prod) => {
                        return (
                            <div className="col-3" key={prod.id}>
                                <Product product={prod} showButton={true} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default ProductsList;