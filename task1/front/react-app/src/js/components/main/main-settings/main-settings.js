import React, { Component } from 'react';

import ChangeStatusTable from './change-status-table';

export default class MainSettings extends Component {
    render() {
        return (
            <main class="main">
                <div class="wrapper">
                    <ChangeStatusTable/>
                </div>
            </main>
        )
    }
}
