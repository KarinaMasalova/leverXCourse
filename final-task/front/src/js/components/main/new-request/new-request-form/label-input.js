import React from 'react';

export default function LabelInput(props) {
    return (
        <label htmlFor="date">{props.text}
            <span 
                className={props.className}
                onMouseOver={props.onMouseOver}
                onMouseLeave={props.onMouseLeave}
            >{props.hint}</span>
        </label>
    );
};