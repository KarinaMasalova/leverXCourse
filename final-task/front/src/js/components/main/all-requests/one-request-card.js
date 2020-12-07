import React from "react";
import { Link } from 'react-router-dom';

export default function OneRequestCard(props) {
    const { id, type, startDate, endDate, durationInDays, creationDate, approve } = props.cardInfo;
    return (
        <Link to={`/details/${id}`} className="request-card">
            <div className={props.className}></div>
            <div className="request-card__info">
                <p className="request-card__title">{type}: {startDate} - {endDate} ({durationInDays} days)</p>
                <p className="request-card__creation-date">Created: {creationDate}</p>
                <p className="request-card__approve">{approve}</p>
            </div>
            <span className="request-card__vector-icon"></span>
        </Link>
    );
}