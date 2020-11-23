import React from "react";
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
    return (
        <Link to="/" className="logo">
            <span className="logo__name">leverx group</span>
            <span className="logo__service">employee services</span>
        </Link>
    );
}