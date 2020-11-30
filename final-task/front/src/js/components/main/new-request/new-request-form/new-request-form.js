import React from 'react';

import FormSelect from './form-select';
import FormDate from './form-date';
import FormTextarea from './textarea';
import FormButton from './form-button';
import FormDaysAmount from './form-days-amount';

export default function NewRequestForm() {
    return (
        <div className="new-request-info">
            <form className="new-request">
                <p className="new-request__title">New Request</p>
                <FormSelect/>
                <div className="new-request__period">
                    <FormDate/>
                    <FormDate/>
                    <FormDaysAmount/>
                </div>
                <FormTextarea/>
                <FormButton/>
                <p className="new-request-faq">Have questions?
                    <a href="#">Read FAQ</a>
                </p>
            </form>
        </div>
    );
}