import React from "react";

export default function GridViewButton(props) {
    let className = "ico ico__grid-view";
    if (props.isActive) {
        className += ' ico__grid-view_active';
    }
    return <span className={className} onClick={props.onClick}></span>;
}