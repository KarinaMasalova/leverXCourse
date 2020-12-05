import React, { useRef } from 'react';

import FormSelect from './form-select';
import FormTextarea from './textarea';
import FormButton from './form-button';
import PeriodInfo from './period-info';

export default function NewRequestForm(props) {
    let selectValue = useRef();
    let startDateValue = useRef();
    let endDateValue = useRef();
    let durationInDaysValue = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmitted(
            selectValue.current.state.value.label,
            startDateValue.current.input.defaultValue,
            endDateValue.current.input.defaultValue,
            durationInDaysValue.current.value
        );
    }

    return (
        <div className="new-request-info">
            <form className="new-request" method="POST" onSubmit={handleSubmit}>
                <p className="new-request__title">New Request</p>
                <FormSelect refSelectValue={selectValue}/>
                <PeriodInfo
                    refStartDateValue={startDateValue}
                    refEndDateValue={endDateValue}
                    refDurationValue={durationInDaysValue}
                />
                <FormTextarea/>
                <FormButton text={'submit'} className={'button button_colored'}/>
                <p className="new-request-faq">Have questions?
                    <a href="#">Read FAQ</a>
                </p>
            </form>
        </div>
    )
}