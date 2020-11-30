import React from 'react';

export default function FormDaysAmount() {
    return (
        <div className="days-amount">
            <label htmlFor="amount">Day(s)
                <span></span>
            </label>
            <input type="text" disabled value="147"></input>
        </div>
    );
}
