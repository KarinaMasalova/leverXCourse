import React, { Component } from "react";

export default class HeaderProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-profile">
                <a href="logIn.html">
                    <button type="button" className="button button_colored user-profile__button">Log In</button>
                </a>
                <a href="registration.html">
                    <button type="button" className="button button_colored user-profile__button">Register</button>
                </a>
            </div>
        );
    }
}