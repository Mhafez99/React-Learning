import {useState} from "react";
// stateless
function WelcomeFc(props) {
    console.log(props);
    let [counter, setCounter] = useState(0); // useState(//Init) => return array[Init,setSate]
    let [name, setName] = useState("Ahmed");
    return (
        <>
            <h1>Hello, {name}</h1>
            <p>Age : {props.age}</p>
            <p>Country: {props.from}</p>
            <h6>{counter}</h6>
            <button onClick={() => {
                setCounter(++counter);
            }}>
                +1 To Counter
            </button>
            <button onClick={() => {
                setName("Hafez");
            }}>
                Change The Name
            </button>
        </>
    );
}
export default WelcomeFc; 