import React, { useState } from 'react'

import TableHead from './table-head';
import TableOneCard from './table-one-card'

import { ascSortCards, descSortCards } from '../../../functions/sorting';

export default function TableCards(props) {
    const [state, setState] = useState({ clickCount: 0 });

    const sortCards = (cards) => {
        console.log(cards);
        let cardsCopy = [...cards];
        console.log(cardsCopy);
        if (state.clickCount % 3 === 1) {
            cardsCopy.sort(ascSortCards);
        } else if (state.clickCount % 3 === 2) {
            cardsCopy.sort(descSortCards);
        }
        return cardsCopy;
    }

    return (
        <table className="cards-table" cellPadding="15%">
            <TableHead onNameClick={() => setState({ clickCount: state.clickCount + 1 })} />
            { sortCards(props.allCards).map((card) => (
                <TableOneCard
                    photo={card.photo}
                    engName={card.engName}
                    ruName={card.ruName}
                    department={card.department}
                    room={card.room}
                    key={card.engName + Math.random()}
                />)
            )}
        </table>
    )
}
