import {useState} from "react";
import Welcome from "./Welcome";
import Guest from "./Guest";
function Login() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    // Conditional Rendering
    // let ele = isLoggedIn ? <h1>I'm Logged In</h1> : <h1>I'm Not Logged In</h1>;
    return (
        <>
            <button onClick={() => {
                setIsLoggedIn(true);
            }}>Login</button>
            {/* {isLoggedIn ? <h1>I'm Logged In</h1> : <h1>I'm Not Logged In</h1>} */}
            {isLoggedIn ? <Welcome name="Hafez" /> : <Guest />}
        </>
    );
}
export default Login;