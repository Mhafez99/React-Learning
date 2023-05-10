import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    componentDidMount() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
    }
    componentWillUnmount() {
        console.log("Unmounting");
    }

    render() {

        return (
            <>
                <h1>Counter: {this.state.counter} Times</h1>
                <button onClick={this.increase}>Increse</button>
            </>
        );
    }
}
export default Counter;