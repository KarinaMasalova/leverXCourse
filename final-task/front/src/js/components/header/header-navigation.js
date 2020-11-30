import React from "react";

export default function HeaderNavigation() {
    return (
        <nav className="header__navigation">
            <ul className="navigation">
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Address Book</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link active">Leave Requests</a>
                </li>
            </ul>
        </nav>
    );
}