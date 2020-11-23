import React from "react";

export default function TableViewButton(props) {
    let className = "ico ico__table-view";
    if (props.isActive) {
        className += ' ico__table-view_active';
    }
    return <span className={className} onClick={props.onClick}></span>;
}