import React, { Component } from 'react';

import Login from './login';
import Password from './password';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.loginInputValue = React.createRef();
        this.passwordInputValue = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onFormSubmitted(
            this.loginInputValue.current.value,
            this.passwordInputValue.current.value
        );
        event.preventDefault();
    }
    
    render() {
        return (
            <form className="authorization__form" method="POST" onSubmit={this.handleSubmit}>            
                <Login refLoginInputValue={this.loginInputValue}/>
                <Password refPasswordInputValue={this.passwordInputValue}/>
                <button className="button button_colored form__button authorization-form__button" type="submit">Log In</button>
            </form>
        )
    }
}
