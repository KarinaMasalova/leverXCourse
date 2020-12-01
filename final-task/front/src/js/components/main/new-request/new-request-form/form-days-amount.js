import React from 'react';

import LabelInput from './label-input';
import DisabledInput from './disabled-input';

export default function FormDaysAmount(props) {
    return (
        <div className="days-amount">
            <LabelInput text={'Day(s)'} className={props.className}/>
            <DisabledInput value={props.value}/>
        </div>
    );
}
