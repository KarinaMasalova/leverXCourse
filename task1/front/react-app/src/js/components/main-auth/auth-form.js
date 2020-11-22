import React, { Component } from 'react'

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
    }

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
            <form className="authorization__form" method="POST" onSubmit={(event) => this.submitForm(event)}>            
                <div className="login">
                    <label htmlFor="login">Login (email)</label>
                    <input
                        id="authorization-login"
                        type="text"
                        placeholder="Enter email"
                        name="login"required
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        id="authorization-password"
                        type="password"
                        placeholder="Enter password"
                        name="password" required
                    />
                </div>
                <button className="button button_colored form__button authorization-form__button" type="submit">Log In</button>
            </form>
        )
    }
}
