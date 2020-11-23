import React, { Component } from "react";

import RegisterForm from './register-form';
import { fetchRegistration } from '../../functions/repository';

const register = (login, password, status) => {
    const body = {
        login: login,
        password: password,
        status: status
    };
    fetchRegistration(body)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

export default function MainRegister() {
    return (
        <main className="main">
            <div className="wrapper log-in">
                <RegisterForm
                    onFormSubmitted={(login, password, status) => register(login, password, status)}
                />
            </div>
        </main>
    );
}