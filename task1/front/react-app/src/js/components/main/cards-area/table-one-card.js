import React, { Component } from 'react'

export default class TableOneCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tbody>
                <tr>
                    <td className="table-card__img" rowSpan="2" width="15%">
                        <img src={this.props.photo} alt=""/>
                    </td>
                    <td className="table-card__engName" width="40%">{this.props.engName}</td>
                    <td className="table-card__department" rowSpan="2" width="30%">{this.props.department}</td>
                    <td className="table-card__room" rowSpan="2" width="15%">{this.props.room}</td>
                </tr>
                <tr>
                    <td className="table-card__ruName">{this.props.ruName}</td>
                </tr>
            </tbody>
        );
    }
}
