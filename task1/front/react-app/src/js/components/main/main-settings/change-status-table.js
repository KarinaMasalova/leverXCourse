import React, { useState, useEffect } from 'react';

import RegisteredUser from './registered-user';
import { fetchRegisteredUsersLogin, fetchStatus } from '../../../functions/repository';

export default function ChangeStatusTable() {
    const [state, setState] = useState({registeredUsers: []});

    useEffect(() => loadRegisteredUsers());

    const updateUserStatus = (login, status) => {
        const body = {
            login: login,
            status: status
        }
        fetchStatus(body)
            .then(() => loadRegisteredUsers())
            .catch(err => console.log(err));
    }

    const loadRegisteredUsers = () => {
        fetchRegisteredUsersLogin()
            .then((data) => {
                setState({registeredUsers: data.users});
            })
            .catch(err => console.log(err));
    }

    return (
        <table className="edit-status-table" width="50%">
            <thead>
                <tr>
                    <td width="60%" height="40"><span className="status-table__login">Login</span></td>
                    <td width="40%" height="40"><span  className="status-table__status">Status</span></td>
                </tr>
            </thead>
            <tbody id="status-table-tbody">
                { state.registeredUsers.map((user) => (
                    <RegisteredUser
                        onButtonClicked={(status) => updateUserStatus(user.login, status)}
                        login={user.login}
                        status={user.status}
                        key={ user.login + Math.random() }
                    />)
                )}
            </tbody>
        </table>
    )
}
