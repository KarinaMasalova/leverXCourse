import React, { Component } from 'react'

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="registration__form" action="./registration.html" method="POST">
                <div className="login">
                    <label htmlFor="login">Login (email)</label>
                    <input id="registration-login" type="text" placeholder="Enter email" name="login" pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]$" required autoComplete="true"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input id="registration-password" type="password" placeholder="Enter password" name="password" required autoComplete="true"/>
                </div>
                <div className="role-selection">
                    <label htmlFor="role-btn">Choose your role</label>
                    <div className="role-variants">
                        <input className="registration-role" type="radio" name="role" value="user"/>User
                        <input className="registration-role" type="radio" name="role" value="editor"/>Editor
                    </div>
                </div>
                <button className="button button_colored form__button" type="submit">Register</button>
            </form>
        );
    }
}
