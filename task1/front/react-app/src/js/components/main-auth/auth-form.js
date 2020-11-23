import React, { Component } from 'react';

import Login from './login';
import Password from './password';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        // this.state = { loginInputValue: '', passwordInputValue: '' };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleLoginChange = this.handleLoginChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    // handleLoginChange(event) {
    //     console.log(this.state.loginInputValue);
    //     this.setState({loginInputValue: event.target.value});
    // }

    // handlePasswordChange(event) {
    //     console.log(this.state.passwordInputValue);
    //     this.setState({passwordInputValue: event.target.value});
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.loginInputValue)
    //     this.props.onFormSubmitted(this.state.passwordInputValue, this.state.loginInputValue);
    // }

    submitForm(event) {
        const login = this.saveInputValue("authorization-login");
        const password = this.saveInputValue("authorization-password");
        event.preventDefault();
        this.props.onFormSubmitted(login, password);
    }

    saveInputValue(inputId) {
        return document.getElementById(inputId).value;
    } 

    
    render() {
        return (
            <form className="authorization__form" method="POST" onSubmit={(event) => this.submitForm(event)/*this.handleSubmit*/}>            
                <Login
                    // value={this.state.loginInputValue}
                    // onChange={this.handleLoginChange}
                />
                <Password
                    // value={this.state.passwordInputValue}
                    // onChange={this.handlePasswordChange}
                />
                <button className="button button_colored form__button authorization-form__button" type="submit">Log In</button>
            </form>
        )
    }
}
