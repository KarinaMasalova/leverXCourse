import React, { Component } from "react";

import RegisterForm from './register-form';
import { fetchRegistration } from '../../functions/repository';

export default class MainAuth extends Component {
    constructor(props) {
        super(props);
    }

    register(login, password, status) {
        const body = {
            login: login,
            password: password,
            status: status
        };
        fetchRegistration(body)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <main className="main">
                <div className="wrapper log-in">
                    <RegisterForm
                        onFormSubmitted={(login, password, status) => this.register(login, password, status)}
                    />
                </div>
            </main>
        );
    }
}