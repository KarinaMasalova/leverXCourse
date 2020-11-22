import React, { Component } from 'react'

export default class TableHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <thead className="cards-table__head thead">
                <tr>
                    <th className="head__column">
                        <span className="ico ico-photo-table"></span>
                        <span className="head__column-name">Photo</span>
                    </th>
                    <th className="head__column">
                        <span className="ico ico-name-table"></span>
                        <span className="head__column-name">Name</span>
                    </th>
                    <th className="head__column">
                        <span className="ico ico-department-table"></span>
                        <span className="head__column-name">Department</span>
                    </th>
                    <th className="head__column">
                        <span className="ico ico-room-table"></span>
                        <span className="head__column-name">Room</span>
                    </th>
                </tr>
            </thead> 
        );
    }
}
