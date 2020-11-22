import React, { Component } from 'react';

export default class RegisteredUser extends Component {
    constructor(props) {
        super(props);
    }

    generateStatusClass(section) {
        return `status-button ${section} ${this.props.status == section 
            ? 'status-button_colored' : 'status-button_bordered'}`;
    }

    processClick(event, status) {
        event.preventDefault();
        this.props.onButtonClicked(status);
    }

    render() {
        return (
            <tr className="registered-user" height="50">
                <td><span className="registered-user__login">{this.props.login}</span></td>
                <td id="status-buttons" className="status-buttons" width="100%">
                    <button
                        className={this.generateStatusClass("user")}
                        onClick={(event) => this.processClick(event, "user")}>
                    user</button>
                    <button
                        className={this.generateStatusClass("editor")}
                        onClick={(event) => this.processClick(event, "editor")}>
                    editor</button>
                    <button
                        className={this.generateStatusClass("admin")}
                        onClick={(event) => this.processClick(event, "admin")}>
                    admin</button>
                </td>
            </tr>
        )
    }
}
