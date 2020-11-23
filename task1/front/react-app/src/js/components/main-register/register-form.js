import React, { useRef } from 'react'

import Login from '../main-auth/login';
import Password from '../main-auth/password';
import RoleSelection from '../main-register/role-selection';

export default function RegisterForm(props) {
    let loginInputValue = useRef(null);
    let passwordInputValue = useRef(null);
    let statusInputValue = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        let radioButtons = [
            statusInputValue.current,
            statusInputValue.current.nextElementSibling
        ];
        radioButtons.forEach((input) => {
            if(input.checked) {
                statusInputValue.current.value = input.value;
            }
        });
        props.onFormSubmitted(
            loginInputValue.current.value,
            passwordInputValue.current.value,
            statusInputValue.current.value
        );
    }
    
    return (
        <form className="registration__form" method="POST" onSubmit={handleSubmit}>
            <Login refLoginInputValue={loginInputValue}/>
            <Password refPasswordInputValue={passwordInputValue}/>
            <RoleSelection refStatusInputValue={statusInputValue}/>
            <button className="button button_colored form__button" type="submit">Register</button>
        </form>
    );
}
