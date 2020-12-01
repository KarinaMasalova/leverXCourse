import React from "react";

// import EmptyRequests from './empty-requests';
import OneRequestCard from './one-request-card';

export default function AllRequests(props) {
    return (
        <div className="all-requests-container">
            <div className="all-requests">
                <p className="all-requests__title">My Leave Requests</p>
                {/* <EmptyRequests/> */}
                { props.allRequests.map((request) => (
                    <OneRequestCard
                        className={(request.type === 'Vacation')
                            ? 'request-card__icon request-card__icon_vacation'
                            : (request.type === 'Sick leave')
                                ? 'request-card__icon request-card__icon_sick-leave'
                                : 'request-card__icon request-card__icon_own-expense'
                        }
                        type={request.type}
                        startDate={request.startDate}
                        endDate={request.endDate}
                        creationDate={request.creationDate}
                        approve={request.approve}
                        key={request.type + Math.random()}
                    />)
                )}
            </div>
        </div>
    );
}