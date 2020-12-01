import React from "react";

export default function OneRequestCard(props) {
    return (
        <div className="request-card">
            <div className={props.className}></div>
            <div className="request-card__info">
                <p className="request-card__title">{props.type}: {props.startDate} - {props.endDate} (4 days)</p>
                <p className="request-card__creation-date">Created: {props.creationDate}</p>
                <p className="request-card__approve">{props.approve}</p>
            </div>
            <span className="request-card__vector-icon"></span>
        </div>
    );
}