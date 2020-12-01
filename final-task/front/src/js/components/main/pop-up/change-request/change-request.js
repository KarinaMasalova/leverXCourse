import React from 'react';

import OneRequestCard from '../../all-requests/one-request-card';
import FormSelect from '../../new-request/new-request-form/form-select';
import FormTextarea from '../../new-request/new-request-form/textarea';
import FormButton from '../../new-request/new-request-form/form-button';
import PeriodInfo from '../../new-request/new-request-form/period-info';

export default function ChangeRequestPopup() {
    return (
        <div className="change-request-info">
            <p className="change-request__title">Change request</p>
            <OneRequestCard/>
            <form className="change-request">
                <FormSelect/>
                <PeriodInfo/>
                <FormTextarea/>
            </form>
            <div className="change-request__buttons">
                <FormButton text={'cancel'} className={'button button_uncolored'}/>
                <FormButton text={'submit'} className={'button button_colored'}/>
            </div>
        </div>
    );
}