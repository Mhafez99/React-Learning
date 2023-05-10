import {useState} from "react";

function Input(props) {
    let [value, setValue] = useState('');
    return (
        <>
            <label>{props.title}</label>
            <span>{value}</span>
            <input type={props.type} onChange={(e) => {
                setValue(e.target.value);
            }} />
        </>
    );
}
export default Input;