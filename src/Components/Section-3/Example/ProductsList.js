
import Product from './Product';
import productsData from './products-data';
import './ProductsList.css';
function ProductsList() {
    let categories = [];
    let products = productsData.map((product) => {
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
            <div className="products-list">
                {products}
            </div>
        </>
    );
}
export default ProductsList;