import React, { useState, useEffect } from "react";

import CardsNumber from './cards-number';
import GridViewButton from './grid-view-button';
import TableViewButton from './table-view-button';
import GridCards from './grid-cards';
import TableCards from "./table-cards";

import { fetchAllEmployees, fetchFilteredEmployees } from '../../../functions/repository';

export default function CardsArea(props) {
    let [state, setState] = useState({
        allCards: [],
        currentCards: [],
        isGrid: true,
        employeesAmount: '0 employee',
    });

    useEffect(() => {
        fetchAllEmployees()
            .then(data => {
                let txt = displayEmployeesAmount(data.cards);
                setState({ ...state, allCards: data.cards, employeesAmount: txt, currentCards: data.cards });
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetchFilteredEmployees(props.filter)
            .then((data) => {
                let txt =  displayEmployeesAmount(data);
                setState({ ...state, currentCards: data, employeesAmount: txt })
            })
            .catch((e) => console.log(e));
    }, [props.filter]);

    const displayEmployeesAmount = (data) => {
        const amount = data.length;
        return amount > 1 ? `${amount} employees displayed` : `${amount} employee displayed`;
    }

    let child = (state.isGrid)
        ? <GridCards allCards={state.currentCards}/>
        : <TableCards allCards={state.currentCards}/>;

    return (
        <div className="cards-area">
            <div className="cards-area__info">
                <CardsNumber text={state.employeesAmount} />
                <GridViewButton
                    onClick={() => setState({ isGrid: true })}
                    isActive={state.isGrid}
                />
                <TableViewButton
                    onClick={() => setState({ isGrid: false })}
                    isActive={!state.isGrid}
                />
            </div>
            {child}
        </div>
    );
}