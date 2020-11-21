import React, { Component } from "react";

import CardsNumber from './cards-number';
import GridViewButton from './grid-view-button';
import TableViewButton from './table-view-button';
import GridCards from './grid-cards';
import TableCards from "./table-cards";

import { fetchAllEmployees } from '../../../functions/repository';

export default class CardsArea extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allCards: [],
            isGrid: true,
            employeesAmount: '0 employee',
        };
        this.loadData();
    }

    loadData() {
        fetchAllEmployees()
        .then(data => {
            const amount = data.cards.length;
            const txt = amount > 1 ? `${amount} employees displayed` : `${amount} employee displayed`;
            this.setState({ allCards: data.cards, employeesAmount: txt });
        })
        .catch(err => console.log(err));
    }

    render() {
        let child = this.state.isGrid ? 
            (<GridCards allCards={this.state.allCards}/>) :
            (<TableCards allCards={this.state.allCards}/>);
        return (
            <div className="cards-area">
                <div className="cards-area__info">
                    <CardsNumber text={this.state.employeesAmount}/>        
                    <GridViewButton
                        onClick={() => this.setState({ isGrid: true })}
                        isActive={ this.state.isGrid }
                    />
                    <TableViewButton 
                        onClick={() => this.setState({ isGrid: false })}
                        isActive={ !this.state.isGrid }
                    />
                </div>
                {child}
            </div>
        );
    }
}