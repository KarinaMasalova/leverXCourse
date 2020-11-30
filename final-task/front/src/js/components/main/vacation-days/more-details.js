import React from "react";

export default function MoreDetails() {    
    return (
        <div className="more-details">
            <div className="drop-down">
                <div className="drop-down__arrows">
                    <span className="drop-down__arrow"></span>
                    <span className="drop-down__arrow"></span>
                    <span className="drop-down__arrow"></span>
                </div>
            </div>
            <span className="more-details__text">more details</span>
        </div>
    );
}