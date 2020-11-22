import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HeaderProfile extends Component {
    constructor(props) {
        super(props);
        this.status = sessionStorage.getItem('status');
    }
    render() {
        const userProfile = this.status !== null 
            ? (
                <div className="user-profile">
                    <div className="user-profile__notification"> 
                        <span className="ico notification__ico"></span>
                    </div>
                    <div className="user-profile__user user">
                        <span className="user__photo"></span>
                        <span className="user__name">karina masalova</span>
                    </div>
                    <div className="user-profile__power-off">
                        <span className="ico power-off__ico"></span>
                    </div>
                </div>
            )
            : (
                <div className="user-profile">
                    <Link to="/authorize">
                        <button type="button" className="button button_colored user-profile__button">Log In</button>
                    </Link>
                    <Link to="/register">
                        <button type="button" className="button button_colored user-profile__button">Register</button>
                    </Link>
                </div>
            );
        return userProfile;
    }
}