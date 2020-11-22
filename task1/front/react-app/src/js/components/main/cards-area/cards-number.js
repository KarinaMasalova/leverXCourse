import React, { Component } from "react";

export default class CardsNumber extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<p className="cards-number">{this.props.text}</p>);
    }
}