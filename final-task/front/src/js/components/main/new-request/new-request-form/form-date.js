import React from 'react';

export default function FormDate() {
    return (
        <div className="date">
            <label htmlFor="date">Start Date
                <span>(inclusive)</span>
            </label>
            <input type="date"></input>
        </div>
    )
}
