import React from 'react';

export default function Approver(props) {
    return (
        <div className="approver">
            <span className={props.className}></span>
            <div className="approver__info">
                <span>{props.name}</span>
                <span>{props.comments}</span>
            </div>
        </div>
    );
}