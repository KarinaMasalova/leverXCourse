import React from "react";

import VacationDays from '../vacation-days/vacation-days';
import NewRequestCard from './new-request-card';

export default function NewRequestContainer() {    
    return (
        <div className="new-request-container">
            <VacationDays/>
            <NewRequestCard/>
        </div>
    );
}