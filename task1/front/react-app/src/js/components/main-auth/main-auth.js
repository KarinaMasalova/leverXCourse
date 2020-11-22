import React, { Component } from "react";

import AuthForm from './auth-form';

export default class MainAuth extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className="main">
                <div className="wrapper authorization">
                    <AuthForm/>
                </div>
            </main>
        );
    }
}