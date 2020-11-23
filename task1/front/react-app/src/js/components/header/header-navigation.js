import React from "react";
import { Link } from 'react-router-dom';

export default function HeaderNavigation() {
    let status = sessionStorage.getItem('status');

    const settingsForAdmin = status === 'admin' ? (
        <li className="navigation__item" id="navigation__settings">
            <Link to="/settings" className="navigation__link">Settings</Link>
        </li>
    ) : '';

    return (
        <nav className="header__navigation">
            <ul className="navigation">
                <li className="navigation__item">
                    <a href="#" className="navigation__link active">Address Book</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Leave Requests</a>
                </li>
                {settingsForAdmin}
            </ul>
        </nav>
    );
}