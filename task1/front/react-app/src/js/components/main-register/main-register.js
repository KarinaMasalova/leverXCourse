import React, { Component } from "react";

import RegisterForm from './register-form';

export default class MainAuth extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className="main">
                <div className="wrapper log-in">
                    <RegisterForm/>
                </div>
            </main>
        );
    }
}