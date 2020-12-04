import React from "react";

import NewRequestForm from './new-request-form/new-request-form';

import { fetchAddingRequest } from '../../../repository/repository';

export default function NewRequestCard() {    
    const leaveRequest = (type, startDate, endDate, duration) => {
        const body = {
            type: type,
            startDate: startDate,
            endDate: endDate,
            durationInDays: duration
        };
        fetchAddingRequest(body)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="new-request-card">
            <div className="new-request-card__img new-request-card__img_vacation"></div>
            <NewRequestForm
                onFormSubmitted={(type, startDate, endDate, duration) => leaveRequest(type, startDate, endDate, duration)}
            />
        </div>
    );
}