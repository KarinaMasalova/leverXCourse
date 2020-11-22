import React, { Component } from 'react';

import RegisteredUser from './registered-user';
import { fetchRegisteredUsersLogin, fetchStatus } from '../../../functions/repository';

export default class ChangeStatusTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registeredUsers: []
        }
    }

    componentDidMount() {
        this.loadRegisteredUsers();
    }

    updateUserStatus(login, status) {
        const body = {
            login: login,
            status: status
        }
        fetchStatus(body)
            .then(() => this.loadRegisteredUsers())
            .catch(err => console.log(err));
    }

    loadRegisteredUsers() {
        fetchRegisteredUsersLogin()
            .then((data) => {
                this.setState({registeredUsers: data.users});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <table className="edit-status-table" width="50%">
                <thead>
                    <tr>
                        <td width="60%" height="40"><span className="status-table__login">Login</span></td>
                        <td width="40%" height="40"><span  className="status-table__status">Status</span></td>
                    </tr>
                </thead>
                <tbody id="status-table-tbody">
                    { this.state.registeredUsers.map((user) => (
                        <RegisteredUser
                            onButtonClicked={(status) => this.updateUserStatus(user.login, status)}
                            login={user.login}
                            status={user.status}
                            key={ user.login + Math.random() }
                        />)
                    )}
                </tbody>
            </table>
        )
    }
}
