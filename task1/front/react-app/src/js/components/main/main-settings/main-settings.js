import React, { Component } from 'react';

import ChangeStatusTable from './change-status-table';

export default class MainSettings extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrapper">
                    <ChangeStatusTable/>
                </div>
            </main>
        )
    }
}
