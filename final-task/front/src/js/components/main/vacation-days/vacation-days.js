import React from "react";

import MoreDetails from './more-details';

export default function VacationDays() {    
    return (
        <div className="vacation-days-container">
            <div className="vacation-days">
                <div className="vacation-days__info">
                    <p className="vacation-days__title">Vacation Days</p>
                    <div className="vacation-days__available available">
                        <span className="available__text">Available</span>
                        <span className="available__days-amount">147</span>
                    </div>
                </div>
            </div>
            <MoreDetails/>
        </div>
    );
}