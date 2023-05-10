import {useEffect, useState} from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";

function Categories() {
    const [products, setProduct] = useState([]);
    const [productsInCategory, setProductsInCategory] = useState([]);
    let categories = [];
    useEffect(() => {
        fetch(`http://localhost:9000/products/`).then((res) => res.json()).then((data) => {
            setProduct(data);
        });
    }, []);
    products.map((product) => {
        if (product.category !== undefined) {
            categories.push(product.category);
        }
    });
    categories = [...new Set(categories)];

    const getProductInCategory = (category) => {
        const filteredProducts = products.filter((product) => product.category === category);
        setProductsInCategory(filteredProducts);
    };

    const getAllProducts = () => {
        setProductsInCategory(products);
    };

    return (
        <>
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <button className="nav-link text-uppercase" onClick={() => getAllProducts()}>All</button>
                </li>
                {categories.map((category) => (
                    <Category key={category} category={category} onClick={() => getProductInCategory(category)} />
                ))}
            </ul>
            <div className="row">
                {
                    productsInCategory.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    );
}
export default Categories;