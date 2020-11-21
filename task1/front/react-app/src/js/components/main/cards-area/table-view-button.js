import React, { Component } from "react";

export default class TableViewButton extends Component {
    render() {
        let className = "ico ico__table-view";
        if (this.props.isActive) {
            className += ' ico__table-view_active';
        }
        return (<span className={className} onClick={this.props.onClick}></span>);
    }
}