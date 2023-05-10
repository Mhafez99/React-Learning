function Product(props) {
    return (
        <div className='card' data-category={props.product.category}>
            <img src={props.product.image} alt='' />
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p>{props.product.category}</p>
            <span>Price: {props.product.price}</span>
            <button onClick={() => {
                console.log("You are Going To Buy " + props.product.title + 'Price Is ' + props.product.price);
            }}>Buy</button>
        </div>
    );
}
export default Product;