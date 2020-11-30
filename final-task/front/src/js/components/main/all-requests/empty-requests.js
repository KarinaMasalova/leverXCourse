import React from "react";

export default function EmptyRequests() {
    return (
        <div className="requests empty-requests">
            <div className="requests__image"></div>
            <p className="requests__absence">No vacation requests yet</p>
            <p className="requests__hint">As soon as you create your first request, you can find it here</p>
        </div>
    );
}