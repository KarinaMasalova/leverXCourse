import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ReturnBtn extends Component {
    render() {
        return (
            <Link to="/">
                <span className="button return-button"></span>
            </Link>
        )
    }

}
