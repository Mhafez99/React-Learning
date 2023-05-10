import {useEffect, useState} from 'react';
import Product from './Product';
// import productsData from './products-data';
import './ProductsList.css';
function ProductsList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data);
        });
    }, []);
    let categories = [];
    let productsArr = products.map((product) => {
        categories.push(product.category);
        return (
            <Product key={product.id} product={product} />
        );
    });
    categories = [...new Set(categories)].map((category, index) => {
        return (
            <li key={index} >{category}</li>
        );
    });

    return (
        <>
            <ul className='categories'>
                {categories}
            </ul>
            {products.length === 0 ? <h1>Loading</h1> : <div className="products-list">{productsArr}</div>}
        </>

    );
}
export default ProductsList;