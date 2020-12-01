import React from 'react';

import FormButton from '../../new-request/new-request-form/form-button';
import OneRequestCard from '../../all-requests/one-request-card';

export default function ConfirmationPopup(props) {
    return (
        <div className="confirmation-info">
            <p className="confirmation__title">Request a vacation</p>
            <p className="confirmation__text">Please confirm creating a new vacation request:</p>
            <OneRequestCard
                
            />
            <div className="request-details__buttons">
                <FormButton text={'cancel'} className={'button button_bordered'}/>
                <FormButton text={'confirm'} className={'button button_colored'}/>
            </div>
        </div>
    );
}