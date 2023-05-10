import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <>
            <ul className="list-group text-center">
                <li className="mb-2 p-2">
                    <Link className="list-group-item active" to="products">Get All Products</Link>
                </li>
                <li className="mb-2 p-2">
                    <Link className="list-group-item" to="categories">Get All Categories</Link>
                </li>
            </ul>
        </>
    );
}
export default Sidebar;