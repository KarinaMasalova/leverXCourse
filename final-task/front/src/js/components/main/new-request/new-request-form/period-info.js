import React, { useState } from 'react';

import FormDate from './form-date';
import FormDaysAmount from './form-days-amount';

export default function PeriodInfo(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (                
        <div className="new-request__period">
            <FormDate
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={'dd MMM yyyy'}
                className={'datepicker'}
                labelText={'Start Date'}
                hint={'(inclusive)'}
                refDateValue = {props.refStartDateValue}
            />
            <FormDate
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat={'dd MMM yyyy'}
                minDate={new Date(startDate)}
                className={'datepicker'}
                labelText={'End Date'}
                hint={'(inclusive)'}
                refDateValue = {props.refEndDateValue}
            />
            <FormDaysAmount
                className={'ico hint-icon'}
                value={parseInt((endDate - startDate) / 24 / 60 / 60 / 1000) + 1}
                refDurationValue = {props.refDurationValue}
            />
        </div>
    )
}