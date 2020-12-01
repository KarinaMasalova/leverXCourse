import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import LabelInput from './label-input';

export default function FormDate(props) {
    return (
        <div className="date">
            <LabelInput text={props.labelText} hint={props.hint}/>
            <DatePicker
                selected={props.selected}
                onChange={props.onChange}
                dateFormat={props.dateFormat}
                scrollableMonthYearDropdown
                showYearDropdown
                minDate={props.minDate}
                className={props.className}
            />
            {/* <input type="date"></input> */}
        </div>
    )
}
