import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HeaderLogo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to="/" className="logo">
                <span className="logo__name">leverx group</span>
                <span className="logo__service">employee services</span>
            </Link>
        );
    }
}