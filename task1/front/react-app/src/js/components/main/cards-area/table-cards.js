import React, { Component } from 'react'

import TableHead from './table-head';
import TableOneCard from './table-one-card'

import { ascSortCards, descSortCards } from '../../../functions/sorting';

export default class TableCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    sortCards(cards) {
        const cardsCopy = [...cards];
        if (this.state.clickCount % 3 === 1) {
            cardsCopy.sort(ascSortCards);
        } else if (this.state.clickCount % 3 === 2) {
            cardsCopy.sort(descSortCards);
        }
        return cardsCopy;
    }

    render() {
        return (
            <table className="cards-table" cellPadding="15%">
                <TableHead onNameClick={() => this.setState({clickCount: this.state.clickCount + 1})}/>
                { this.sortCards(this.props.allCards).map((card) => (
                    <TableOneCard
                        photo={card.photo}
                        engName={card.engName}
                        ruName={card.ruName}
                        department={card.department}
                        room={card.room}
                        key={ card.engName + Math.random() }
                    />)
                )}
            </table>
        )
    }
}
