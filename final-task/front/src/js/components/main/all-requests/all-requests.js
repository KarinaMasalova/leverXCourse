import React from "react";

import EmptyRequests from './empty-requests';
import OneRequestCard from './one-request-card';

export default function AllRequests() {
    return (
        <div className="all-requests">
            <p className="all-requests__title">My Leave Requests</p>
            <EmptyRequests/>
            {/* <OneRequestCard/> */}
        </div>
    );
}