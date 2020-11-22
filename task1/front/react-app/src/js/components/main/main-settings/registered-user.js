import React, { Component } from 'react';

export default class RegisteredUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="registered-user" height="50">
                <td><span className="registered-user__login">{this.props.login}</span></td>
                <td id="status-buttons-$login" className="status-buttons" width="100%">
                    <button className="status-button $userClass user" value={this.props.status} name="user">user</button>
                    <button className="status-button $editorClass editor" value={this.props.status} name="editor">editor</button>
                    <button className="status-button $adminClass admin" value={this.props.status} name="admin">admin</button>
                </td>
            </tr>
        )
    }
}
