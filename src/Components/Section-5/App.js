

import Navbar from "./Navbar";
import Slider from "./Slider";
import ProductList from './ProductsList';
import {Routes, Route} from "react-router-dom";
import About from './About';
import ProductDetails from "./ProductDetails";
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Slider />
                        <ProductList />
                    </>
                } />
                <Route path="about" element={<About />} />
                <Route path="product/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}
export default App;
