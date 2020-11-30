import React from "react";

import NewRequestContainer from './new-request/new-request-container';
import AllRequests from './all-requests/all-requests';

export default function Main() {
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <NewRequestContainer/>
                <AllRequests/>
            </div>
        </main>
    );
}