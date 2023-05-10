import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function EditProduct() {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDes] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9000/products/${params.productID}`, {
            title,
            description,
            price,
            image
        }).then(() => navigate("/products"));
    };
    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.productID}`).then((res) => res.json()).then((data) => {
            setProduct(data);
            setTitle(data.title);
            setDes(data.description);
            setPrice(data.price);
            setImage(data.image);
        });
    }, [params.productID]);
    return (
        <>
            <form onSubmit={updateProduct}>
                <div className="mb-3 text-center">
                    <img className="w-50 h-385" src={image} alt="Product Image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputId" className="form-label">ID</label>
                    <input type="text" className="form-control" id="exampleInputId" value={product.id} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle" value={title} onChange={(e) => setTitle(e.target.value)}  />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDes" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="exampleInputDes" value={description} onChange={(e) => setDes(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputPrice" value={price} onChange={(e) => setPrice(e.target.value)}  />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </>
    );
}
export default EditProduct;