import '../../App.css';
import {useSelector, useDispatch} from 'react-redux';
// import {deposite, withdraw} from './Store/Actions/bank-actions';
import {deposite, withdraw} from './RTK/Slices/bank-slice';
import Products from './Products';

function App() {
    const state = useSelector(state => state.bank); // To Get State
    const dispatch = useDispatch(); // To dispatch action
    console.log(state);
    return (
        <>
            <p>Your Bank Balance: {state}</p>
            <button onClick={() => dispatch(withdraw(100))}>Withdraw</button>
            <button onClick={() => dispatch(deposite(100))}>Deposite</button>
            <Products />
        </>
    );
}
export default App;;
