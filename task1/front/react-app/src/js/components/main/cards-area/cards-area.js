import React, { Component } from "react";

import CardsNumber from './cards-number';
import GridViewButton from './grid-view-button';
import TableViewButton from './table-view-button';
import GridCards from './grid-cards';
import TableCards from "./table-cards";

import { fetchAllEmployees, fetchFilteredEmployees } from '../../../functions/repository';

export default class CardsArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCards: [],
            currentCards: [],
            isGrid: true,
            employeesAmount: '0 employee',
        };
    }

    displayEmployeesAmount(data) {
        const amount = data.length;
        return amount > 1 ? `${amount} employees displayed` : `${amount} employee displayed`;
    }

    componentDidMount() {
        fetchAllEmployees()
            .then(data => {
                let txt = this.displayEmployeesAmount(data.cards);
                this.setState({ allCards: data.cards, employeesAmount: txt, currentCards: data.cards });
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) { /* filter - value (string) from search input */
            fetchFilteredEmployees(this.props.filter)
                .then((data) => {
                    let txt =  this.displayEmployeesAmount(data);
                    this.setState({ currentCards: data, employeesAmount: txt })
                })
                .catch((e) => console.log(e));
        }
    }

    render() {
        let child = this.state.isGrid ?
            (<GridCards allCards={this.state.currentCards} />) :
            (<TableCards allCards={this.state.currentCards} />);
        return (
            <div className="cards-area">
                <div className="cards-area__info">
                    <CardsNumber text={this.state.employeesAmount} />
                    <GridViewButton
                        onClick={() => this.setState({ isGrid: true })}
                        isActive={this.state.isGrid}
                    />
                    <TableViewButton
                        onClick={() => this.setState({ isGrid: false })}
                        isActive={!this.state.isGrid}
                    />
                </div>
                {child}
            </div>
        );
    }
}