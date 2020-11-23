import React from "react";

import GridOneCard from './grid-one-card';

export default function GridCards(props) {
    return (
        <div className="cards">
            { props.allCards.map((card) => (
                <GridOneCard
                    photo={card.photo}
                    engName={card.engName}
                    ruName={card.ruName}
                    department={card.department}
                    room={card.room}
                    card={card}
                    key={card.engName + Math.random()}
                />)
            )}
        </div>
    );
}