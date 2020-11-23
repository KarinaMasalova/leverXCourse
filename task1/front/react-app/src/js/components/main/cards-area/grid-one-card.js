import React from "react";
import { Route } from 'react-router-dom';

export default function GridOneCard(props) {
    return (
        <Route render={({ history }) => (
            <div className="card" onClick={() => { history.push(`/full-info-card/${props.card.id}`) }}>
                <div className="card__img">
                    <img src={props.photo} alt="" />
                </div>
                <a className="card__engName">{props.engName}</a>
                <p className="card__ruName">{props.ruName}</p>
                <div className="card__info">
                    <div className="department">
                        <span className="ico department__ico"></span>
                        <span className="department__kind">{props.department}</span>
                    </div>
                    <div className="room">
                        <span className="ico room__ico"></span>
                        <span className="room__number">{props.room}</span>
                    </div>
                </div>
            </div>
        )} />
    );
}
