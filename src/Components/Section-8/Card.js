function Card(props) {
    return (
        <>
            <h1>Card</h1>
            {props.children}
        </>
    );
}
Card.Title = function() {
    return (
        <p>Card Title</p>
    );
};
Card.Image = function(props) {
    return (
        <img src={props.src} alt="" />
    );
};
export default Card;