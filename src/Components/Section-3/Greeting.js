import Guest from "./Guest";
import Welcome from "./Welcome";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // Conditional Rendering
    if (isLoggedIn) {
        return <Welcome name="Hafez" />;
    }
    return <Guest />;
}
export default Greeting;