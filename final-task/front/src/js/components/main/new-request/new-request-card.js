import React from "react";
import { useSelector } from "react-redux";

import NewRequestForm from './new-request-form/new-request-form';
import { fetchAddingRequest } from '../../../repository/repository';

export default function NewRequestCard() {   
    let className = "new-request-card__img new-request-card__img_vacation";

    const getSelectedValue = (state) => state.selectedValueReducer.selectedValue;
    const selectedValue = useSelector(getSelectedValue);

    className = (selectedValue === 'Vacation') 
        ? "new-request-card__img new-request-card__img_vacation"
        : (selectedValue === 'Sick leave')
            ? "new-request-card__img new-request-card__img_sick-leave"
            : "new-request-card__img new-request-card__img_own-expense";

    const leaveRequest = (type, startDate, endDate, duration) => {
        const body = {
            type: type,
            startDate: startDate,
            endDate: endDate,
            durationInDays: duration
        };
        fetchAddingRequest(body)
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="new-request-card">
            <div className={className}></div>
            <NewRequestForm
                onFormSubmitted={(type, startDate, endDate, duration) => leaveRequest(type, startDate, endDate, duration)}
            />
        </div>
    );
}