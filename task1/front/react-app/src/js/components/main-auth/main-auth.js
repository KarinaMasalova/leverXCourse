import React, { Component } from "react";

import AuthForm from './auth-form';
import { fetchAuthorization } from '../../functions/repository';

export default class MainAuth extends Component {
    constructor(props) {
        super(props);
    }

    authorize(login, password) {
        const body = {
            login: login,
            password: password
        };
        fetchAuthorization(body)
            .then(data => {
                sessionStorage.setItem('login', data.login);
                sessionStorage.setItem('status', data.status);
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <main className="main">
                <div className="wrapper authorization">
                    <AuthForm
                        onFormSubmitted={(login, password) => this.authorize(login, password)}
                    />
                </div>
            </main>
        );
    }
}