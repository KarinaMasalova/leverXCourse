import React from "react";

import NewRequestForm from './new-request-form/new-request-form';

export default function NewRequestCard() {    
    return (
        <div className="new-request-card">
            <div className="new-request-card__img new-request-card__img_vacation"></div>
            <NewRequestForm/>
        </div>
    );
}