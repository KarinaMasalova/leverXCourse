import React, { Component } from 'react';

export default function RegisteredUser(props) {
    const generateStatusClass = (section) => {
        return `status-button ${section} ${props.status == section 
            ? 'status-button_colored'
            : 'status-button_bordered'}`;
    }

    const processClick = (event, status) => {
        event.preventDefault();
        props.onButtonClicked(status);
    }

    return (
        <tr className="registered-user" height="50">
            <td><span className="registered-user__login">{props.login}</span></td>
            <td id="status-buttons" className="status-buttons" width="100%">
                <button
                    className={generateStatusClass("user")}
                    onClick={(event) => processClick(event, "user")}>
                user</button>
                <button
                    className={generateStatusClass("editor")}
                    onClick={(event) => processClick(event, "editor")}>
                editor</button>
                <button
                    className={generateStatusClass("admin")}
                    onClick={(event) => processClick(event, "admin")}>
                admin</button>
            </td>
        </tr>
    )
}
