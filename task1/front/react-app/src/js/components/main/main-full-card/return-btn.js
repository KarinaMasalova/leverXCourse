import React from 'react'
import { Link } from "react-router-dom";

export default function ReturnBtn() {
    return (
        <Link to="/">
            <span className="button return-button"></span>
        </Link>
    );
}
