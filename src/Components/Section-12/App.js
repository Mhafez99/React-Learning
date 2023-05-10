
import {Route, Routes} from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Products from './Products';
import Cart from './Cart';
function App() {
    return (
        <>
            <AppNavbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    );
}
export default App;;
