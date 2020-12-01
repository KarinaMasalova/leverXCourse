import React from 'react';

import FormSelect from './form-select';
import FormTextarea from './textarea';
import FormButton from './form-button';
import PeriodInfo from './period-info';

export default function NewRequestForm() {
    return (
        <div className="new-request-info">
            <form className="new-request">
                <p className="new-request__title">New Request</p>
                <FormSelect/>
                <PeriodInfo/>
                <FormTextarea/>
                <FormButton text={'submit'} className={'button button_colored'}/>
                <p className="new-request-faq">Have questions?
                    <a href="#">Read FAQ</a>
                </p>
            </form>
        </div>
    )
}