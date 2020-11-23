import React, { Component } from 'react'

import Login from '../main-auth/login';
import Password from '../main-auth/password';
import RoleSelection from '../main-register/role-selection';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.loginInputValue = React.createRef();
        this.passwordInputValue = React.createRef();
        this.statusInputValue = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let radioButtons = [
            this.statusInputValue.current,
            this.statusInputValue.current.nextElementSibling
        ];
        radioButtons.forEach((input) => {
            if(input.checked) {
                this.statusInputValue.current.value = input.value;
            }
        });
        this.props.onFormSubmitted(
            this.loginInputValue.current.value,
            this.passwordInputValue.current.value,
            this.statusInputValue.current.value
        );
    }

    render() {
        return (
            <form className="registration__form" method="POST" onSubmit={this.handleSubmit}>
                <Login refLoginInputValue={this.loginInputValue}/>
                <Password refPasswordInputValue={this.passwordInputValue}/>
                <RoleSelection refStatusInputValue={this.statusInputValue}/>
                <button className="button button_colored form__button" type="submit">Register</button>
            </form>
        );
    }
}
