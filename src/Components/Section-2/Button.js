function Button(props) {
    const btnHandler = () => {
        console.log("Hello");
    };
    const mouseLeave = () => {
        console.log("Good bye");
    };
    return (
        <button className="react-btn" onClick={btnHandler} onMouseLeave={mouseLeave}>
            {props.title}</button>
    );
}
export default Button;