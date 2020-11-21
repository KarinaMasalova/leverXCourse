import React, { Component } from "react";

export default class GridViewButton extends Component {
    render() {
        let className = "ico ico__grid-view";
        if (this.props.isActive) {
            className += ' ico__grid-view_active';
        }
        return (<span className={className} onClick={this.props.onClick}></span>);
    }
}