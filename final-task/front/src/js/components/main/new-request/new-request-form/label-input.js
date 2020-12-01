import React from 'react';

export default function LabelInput(props) {
    return (
        <label htmlFor="date">{props.text}
            <span className={props.className}>{props.hint}</span>
        </label>
    );
};