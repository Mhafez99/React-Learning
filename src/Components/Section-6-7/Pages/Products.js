import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect((() => {
        getAllProducts();
    }), []);
    const getAllProducts = () => {
        fetch("http://localhost:9000/products").then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    };
    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are You Sure To Delete ${product.title}`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                }).then((response) => response.json()).then(() => {
                    getAllProducts();
                });
            }
        });

    };
    return (
        <>
            <h1>Products Page</h1>
            <Link to={'/products/add'} className="btn btn-success mt-2">Add New Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td >{product.id}</td>
                                    <td >{product.title}</td>
                                    <td >{product.description.slice(0, 25)}...</td>
                                    <td >{product.price}</td>
                                    <td className="w-25">
                                        <button className="btn btn-danger btn-sm mx-2" onClick={() => deleteProduct(product)}>Delete</button>
                                        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm mx-2">View</Link>
                                        <Link to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    );
}
export default Products;