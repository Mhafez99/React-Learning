import Button from "./Button";
import Avatar from "./Avatar";
function Product(props) {
    return (
        <div className="product-card">
            <Avatar src="https://www.placeholder/60x60/red" alt="Not Exist" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <span>{props.price}</span>
            <Button title="Details" />
        </div>
    );
}
export default Product;