import {useState, useEffect} from 'react';

// StateLess
function CounterFc() {
    const [counter, setCouner] = useState(0);
    const [product, setProduct] = useState(0);
    // useEffect(() => {
    //     document.title = `You Click ${counter} Times`;
    // }, [counter]);
    useEffect(() => {
        setCouner(counter + 1);
        console.log("Product Change Me Change ");
        return () => {
            console.log("UnMounting");
        };
    }, [product]);
    // dependency List
    /*
    only one render مره واحده  useEffectهينفذ اللي جوا ال
    Rerender useEffectو اي حاجه جوا ال []اول ما تتعير هيروح يغير اللي جوا ال
    Simulate componentDidMount()
    Maximize state That Change More [rerender more]
    */
    return (
        <>
            <h1>Counter: {counter} Times</h1>
            <h1>Product: {product} Times</h1>
            <button onClick={() => setCouner(counter + 1)}>IncreaseCounter</button>
            <button onClick={() => setProduct(product + 1)}>IncreaseProduct</button>
        </>
    );
};
export default CounterFc;