import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";
// stateful
class Logincontrol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    };
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    };
    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let button;
        isLoggedIn ? button = <LogoutButton onClick={this.handleLogoutClick} /> : button = <LoginButton onClick={this.handleLoginClick} />;
        return (
            <>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </>
        );
    }

}
export default Logincontrol;