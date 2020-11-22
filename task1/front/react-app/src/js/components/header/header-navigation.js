import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HeaderNavigation extends Component {
    constructor(props) {
        super(props);
    }
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
                        <Link to="/settings" className="navigation__link">Settings</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}