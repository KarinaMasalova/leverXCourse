import React, { Component } from "react";

export default class GridOneCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card__img">
                    <img src={this.props.photo} alt=""/>
                </div>
                <a className="card__engName">{this.props.engName}</a>
                <p className="card__ruName">{this.props.ruName}</p>
                <div className="card__info">
                    <div className="department">
                        <span className="ico department__ico"></span>
                        <span className="department__kind">{this.props.department}</span>
                    </div>
                    <div className="room">
                        <span className="ico room__ico"></span>
                        <span className="room__number">{this.props.room}</span>
                    </div>
                </div>
            </div>
        );
    }
}
