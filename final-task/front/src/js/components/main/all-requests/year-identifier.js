import React from 'react';

export default function YearIdentifier(props) {
    return (
        <div className="year">
            <span className="year__number">{props.year} Year</span>
        </div>
    )
}