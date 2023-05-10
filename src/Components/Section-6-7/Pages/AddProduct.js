import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddProduct() {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDes] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    let navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/products", {
            title,
            description,
            image,
            category,
            price,
        }).then(() => navigate("/products"));
        // fetch("http://localhost:9000/products", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/json",
        //     },
        //     body: JSON.stringify({
        //         title,
        //         description,
        //         image,
        //         category,
        //         price,
        //     })
        // }).then((response) => response.json()).then(() => navigate("/products"));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            setImage(reader.result);
        };
    };
    // --------------------------------Categories---------------------------------
    useEffect(() => {
        fetch(`http://localhost:9000/products/`).then((res) => res.json()).then((data) => {
            setProducts(data);
        });
    });
    let categories = [];
    products.map((product) => {
        if (product.category !== undefined) {
            categories.push(product.category);
        }
    });
    categories = [...new Set(categories)];
    // ---------------------------------------------------------------------------------
    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3 upload" onChange={handleImageUpload}>
                    <label htmlFor="inputImg" className="form-label image d-block" >Image</label>
                    {image && <img src={image} alt="product" />}
                    <input type="file" className="form-control d-none" id="inputImg" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <input type="text" placeholder="Product Title" className="form-control" id="inputTitle" required onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDes" className="form-label">Description</label>
                    <input type="text" placeholder="Product Description" className="form-control" id="inputDes" required onChange={(e) => {
                        setDes(e.target.value);
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCategory" className="form-label">Category</label>
                    <select className="form-select" aria-label="Default select " id="inputCategory" required onChange={(e) => {
                        setCategory(e.target.value);
                    }}>
                        <option defaultValue disabled>Open this select menu</option>
                        {
                            categories.map((category) => {
                                return (
                                    <>
                                        <option key={category}>{category}</option>
                                    </>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" placeholder="Product Price" className="form-control" id="inputPrice" required onChange={(e) => {
                        setPrice(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}
export default AddProduct;