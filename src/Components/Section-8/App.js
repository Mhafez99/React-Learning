import '../../App.css';
import Navbar from './Navbar';
import ProductsList from './ProductsList';
import ProductsProvider from './ContextApi-8/ProductsContext';
import Card from './Card';


function App() {
    return (
        <>
            <ProductsProvider>
                <Navbar />
                <Navbar.Toggle />
                <ProductsList />
                <Card>
                    <Card.Title />
                    <Card.Image src="" />
                </Card>
            </ProductsProvider>
        </>
    );
}
export default App;;
