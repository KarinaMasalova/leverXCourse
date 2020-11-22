import React, { Component } from "react";

import GridOneCard from './grid-one-card';

export default class GridCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cards">
                { this.props.allCards.map((card) => (
                    <GridOneCard
                        photo={card.photo}
                        engName={card.engName}
                        ruName={card.ruName}
                        department={card.department}
                        room={card.room}
                        key={ card.engName + Math.random() }
                    />)
                )}
            </div>
        );
    }
}