import React, { Component } from "react";

export default class HeaderLogo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href="#" className="logo">
                <span className="logo__name">leverx group</span>
                <span className="logo__service">employee services</span>
            </a>
        );
    }
}