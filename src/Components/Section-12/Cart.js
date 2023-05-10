import {Button, Container, Image, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteFromCart} from './RTK/Slices/cart-slice';
import {clear} from './RTK/Slices/cart-slice';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    return (
        <Container className="py-5">
            <h1 className="py-3">Welcome To Cart</h1>
            <Button variant="primary" className="mb-3" onClick={() => dispatch(clear())}>Clear Cart</Button>
            <h5>Total Price : {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><Image src={product.image} alt={product.title} style={{width: "100px", height: "100px"}} /></td>
                            <td>{product.price} $</td>
                            <td>{product.quantity}</td>
                            <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
export default Cart;