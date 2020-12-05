import React from "react";
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
    return (
        <Link to="/" className="logo">
            <span className="logo__image"></span>
        </Link>
    );
}