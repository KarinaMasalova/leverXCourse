import React, { Component } from 'react'

import TableHead from './table-head';
import TableOneCard from './table-one-card'

export default class TableCards extends Component {
    render() {
        return (
            <table className="cards-table" cellPadding="15%">
                <TableHead/>
                { this.props.allCards.map((card) => (
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
