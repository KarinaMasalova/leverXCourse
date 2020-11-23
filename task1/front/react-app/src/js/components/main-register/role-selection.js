import React from 'react'

export default function RoleSelection(props) {
    return (
        <div className="role-selection">
            <label htmlFor="role-btn">Choose your role</label>
            <div className="role-variants">
                <input
                    className="registration-role"
                    type="radio"
                    name="role"
                    value="user"
                    ref={props.refStatusInputValue}
                />User
                <input
                    className="registration-role"
                    type="radio"
                    name="role"
                    value="editor"
                />Editor
            </div>
        </div>
    )
}
