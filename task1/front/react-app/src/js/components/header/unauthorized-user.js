import React from 'react';
import { Link } from 'react-router-dom';

export default function UnauthorizedUser() {
    return (
        <div className="user-profile">
            <Link to="/authorize">
                <button type="button" className="button button_colored user-profile__button">Log In</button>
            </Link>
            <Link to="/register">
                <button type="button" className="button button_colored user-profile__button">Register</button>
            </Link>
        </div>
    )
}
