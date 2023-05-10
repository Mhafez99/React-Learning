import {Link} from "react-router-dom";

function Product(props) {
    const {product, showButton} = props; // Destructuring
    return (
        <>
            <div className="card border border-primary my-2 h-70">
                <img src={product.image} className="card-img-top height-500" alt={product.title} />
                <div className="card-body text-center">
                    <h5 className="card-title fs-5 text-danger">{product.title}</h5>
                    <p className="card-text lh-base fs-6">{product.description}</p>
                    <p className="text-success fw-bold">Price: {product.price}$</p>
                    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
                </div>
            </div>
        </>
    );
}
export default Product;