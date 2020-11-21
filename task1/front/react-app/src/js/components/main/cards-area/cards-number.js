import React, { Component } from "react";

export default class CardsNumber extends Component {
    render() {
        return (<p className="cards-number">{this.props.text}</p>);
    }
}