import React from "react";
import { useSelector } from 'react-redux';

import MoreDetails from './more-details';

export default function VacationDays() {   
    const getAvailableDaysAmount = (state) => state.availableDaysReducer.availableDays;
    const availableDays = useSelector(getAvailableDaysAmount); 
    return (
        <div className="vacation-days-container">
            <div className="vacation-days">
                <div className="vacation-days__info">
                    <p className="vacation-days__title">Vacation Days</p>
                    <div className="vacation-days__available available">
                        <span className="available__text">Available</span>
                        <span className="available__days-amount">{availableDays}</span>
                    </div>
                </div>
            </div>
            <MoreDetails/>
        </div>
    );
}