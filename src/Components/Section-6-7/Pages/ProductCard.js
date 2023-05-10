function ProductCard({product}) {
    return (
            <div className="card col-3 border border-primary my-2 h-70">
                <img src={product.image} className="card-img-top h-385" alt={product.title} />
                <div className="card-body text-center">
                    <h5 className="card-title fs-5 text-danger">{product.title}</h5>
                    <p className="card-text lh-base fs-6">{product.description}</p>
                    <p className="text-success fw-bold">Price: {product.price}$</p>
                </div>
            </div>
    );
}
export default ProductCard;