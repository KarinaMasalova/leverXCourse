import React, { Component } from 'react';

import RegisteredUser from './registered-user';

export default class ChangeStatusTable extends Component {
    render() {
        return (
            <table class="edit-status-table" width="50%">
                <thead>
                    <tr>
                        <td width="60%" height="40"><span class="status-table__login">Login</span></td>
                        <td width="40%" height="40"><span  class="status-table__status">Status</span></td>
                    </tr>
                </thead>
                <tbody id="status-table-tbody">
                    <RegisteredUser/>
                </tbody>
            </table>
        )
    }
}
