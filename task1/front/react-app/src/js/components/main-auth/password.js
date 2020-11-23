import React from 'react'

export default function Password(props) {
    return (
        <div className="password">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Enter password"
                name="password" required
                ref={props.refPasswordInputValue}
            />
        </div>
    )
}
