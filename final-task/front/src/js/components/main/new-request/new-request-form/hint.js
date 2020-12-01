import React from 'react';

export default function Hint(props) {
    return (
        <div className="hint" style={props.hintStyle}>
            <p className="hint__text">The days calculated here are calendar days:</p>
            <p className="hint__text hint__text_bolder">Calendar days = Work days + Weekends</p>
            <p className="hint__text">Number of days can be adjusted by Personnel Officer (Katsiaryna Barysik) in accordance with the current legislation.</p>
        </div>
    );
};