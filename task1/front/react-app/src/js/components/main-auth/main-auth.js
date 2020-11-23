import React from "react";

import AuthForm from './auth-form';
import { fetchAuthorization } from '../../functions/repository';

const authorize = (login, password) => {
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

export default function MainAuth() {
    return (
        <main className="main">
            <div className="wrapper authorization">
                <AuthForm
                    onFormSubmitted={(login, password) => authorize(login, password)}
                />
            </div>
        </main>
    );
}