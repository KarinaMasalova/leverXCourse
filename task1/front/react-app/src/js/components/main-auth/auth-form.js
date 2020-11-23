import React, { useRef } from 'react';

import Login from './login';
import Password from './password';

export default function AuthForm(props) {
    let loginInputValue = useRef();
    let passwordInputValue = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmitted(
            loginInputValue.current.value,
            passwordInputValue.current.value
        );
    }

    return (
        <form className="authorization__form" method="POST" onSubmit={handleSubmit}>            
            <Login refLoginInputValue={loginInputValue}/>
            <Password refPasswordInputValue={passwordInputValue}/>
            <button className="button button_colored form__button authorization-form__button" type="submit">Log In</button>
        </form>
    )
}
