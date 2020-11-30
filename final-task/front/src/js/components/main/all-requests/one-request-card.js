import React from "react";

export default function OneRequestCard() {
    return (
        <div className="request-card">
            <div className="request-card__icon request-card__icon_vacation"></div>
            <div className="request-card__info">
                <p className="request-card__title">Vacation: 16 Sep 2018 - 20 Sep 2018 (4 days)</p>
                <p className="request-card__creation-date">Created: 1 Sep 2019</p>
                <p className="request-card__approve">Approved</p>
            </div>
            <span className="request-card__vector-icon"></span>
        </div>
    );
}