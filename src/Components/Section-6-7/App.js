import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './App.css';
import {Outlet, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from './Pages/EditProduct';
import Categories from './Pages/Categories';
function App() {
    return (
        <>
            <Navbar />
            <div className='row pe-0'>
                <div className='col-2 sidebar'><Sidebar /></div>
                <div className='col-10 p-3'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='products' element={<Outlet />} >
                            <Route path='' element={<Products />} />
                            <Route path='add' element={<AddProduct />} />
                            <Route path=':productID' element={<ProductDetails />} />
                            <Route path='edit/:productID' element={<EditProduct />} />
                        </Route>
                        <Route path='categories' element={<Categories />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default App;