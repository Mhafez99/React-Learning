import {useState} from "react";
import React from "react";
// function Form() {
//     const [name, setName] = useState('');
//     const [password, setPass] = useState('');
//     const [gender, setGender] = useState('');

//     let nameHandler = (value) => {
//         setName(value);
//     };
//     let passHandler = (value) => {
//         setPass(value);
//     };
//     let genderHandler = (value) => {
//         setGender(value);
//     };
//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             console.log("Form Submitted");
//             console.log(
//                 {
//                     name,
//                     password,
//                     gender
//                 }
//             );
//         }}>
//             <label>Name</label>
//             <input type="text" placeholder="Your Name" onChange={(e) => {
//                 nameHandler(e.target.value);
//             }} />
//             <br />
//             <label>Password</label>
//             <input type="password" placeholder="Your Password" onChange={(e) => {
//                 passHandler(e.target.value);
//             }} />
//             <br />
//             <label>Gender</label>
//             <select onChange={(e) => {
//                 genderHandler(e.target.value);
//             }}>
//                 <option value="male">Male</option>
//                 <option value="female">female</option>
//             </select>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            gender: '',
        };
    }
    nameHandler = (value) => {
        this.setState({name: value});
    };
    passHandler = (value) => {
        this.setState({password: value});
    };
    genderHandler = (value) => {
        this.setState({gender: value});
    };


    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state);
            }}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" onChange={(e) => {
                    this.nameHandler(e.target.value);
                }} />
                <br />
                <label>Password</label>
                <input type="password" placeholder="Your Password" onChange={(e) => {
                    this.passHandler(e.target.value);
                }} />
                <br />
                <label>Gender</label>
                <select onChange={(e) => {
                    this.genderHandler(e.target.value);
                }}>
                    <option value="male">Male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        );
    }

}
export default Form;