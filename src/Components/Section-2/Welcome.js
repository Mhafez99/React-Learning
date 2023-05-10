
import React from "react";
// Stateful
class Welcome extends React.Component {
    constructor(props) {
        console.log("Constructor Phase");
        super(props);
        // ----- Internal Data For Component 
        this.state = {
            firstName: "Mohamed",
            lastName: "Ahmed"
        };
        // this.changeName = this.changeName.bind(this);
    }
    // state = {
    //firstName: "Mohamed",
    //lastName: "Hafez"
    // }

    // changeName() {
    //     this.setState({
    //         lastName: "Hafez",
    //     });
    // };

    changeName = () => {
        this.setState({
            lastName: "Hafez",
        });
    };

    render() {
        console.log("Render Phase");
        console.log(this.state);
        return (
            <>
                <h1>Hello Class Component {this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Title: {this.props.title}</p>
                <h6>Created by ,{this.state.firstName} {this.state.lastName}</h6>
                <button onClick={this.changeName}>Click To Change Last Name</button >
            </>
        );
    }
    componentDidMount() {
        console.log("componentDidMount Phase");
    }
}
export default Welcome;