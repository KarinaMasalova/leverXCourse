import React from 'react'

export default function TableOneCard(props) {
    return (
        <tbody>
            <tr>
                <td className="table-card__img" rowSpan="2" width="15%">
                    <img src={props.photo} alt="" />
                </td>
                <td className="table-card__engName" width="40%">{props.engName}</td>
                <td className="table-card__department" rowSpan="2" width="30%">{props.department}</td>
                <td className="table-card__room" rowSpan="2" width="15%">{props.room}</td>
            </tr>
            <tr>
                <td className="table-card__ruName">{props.ruName}</td>
            </tr>
        </tbody>
    );
}
