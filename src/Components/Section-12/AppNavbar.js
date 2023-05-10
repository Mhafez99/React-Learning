import {Container, Nav, Navbar} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function AppNavbar() {
    const cart = useSelector(state => state.cart);
    return (
        <Navbar fixed="top" bg="secondary" expand="lg" >
            <Container>
                <Link to="/" className="navbar-brand">CartApp</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link fs-5">Products</Link>
                        <Link to="/cart" className="nav-link fs-5">Cart - {cart.length}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppNavbar;