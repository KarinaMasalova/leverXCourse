import React, { Component } from "react";

export default class HeaderNavigation extends Component {
    render() {
        return (
            <nav className="header__navigation">
                <ul className="navigation">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link active">Address Book</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Leave Requests</a>
                    </li>
                    <li className="navigation__item" id="navigation__settings">
                        <a href="changeStatus.html" className="navigation__link">Settings</a>
                    </li>
                </ul>
            </nav>
        );
    }
}