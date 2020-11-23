import React from 'react'

export default function Login(props) {
    return (
        <div className="login">
            <label htmlFor="login">Login (email)</label>
            <input
                type="text"
                placeholder="Enter email"
                name="login" required
                ref={props.refLoginInputValue}
            />
        </div>
    )
}
