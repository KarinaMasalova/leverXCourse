import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsNumber from './cards-number';
import GridViewButton from './grid-view-button';
import TableViewButton from './table-view-button';
import GridCards from './grid-cards';
import TableCards from "./table-cards";
import { fetchAllEmployees, fetchFilteredEmployees } from '../../../functions/repository';

/* actionCreators */
import setGridView from "../../../store/actionCreators/setGridView";
import setTableView from "../../../store/actionCreators/setTableView";
import setAllCards from "../../../store/actionCreators/setAllCards";
import setEmployeesAmount from "../../../store/actionCreators/setEmployeesAmount";

export default function CardsArea(props) {
    const dispatch = useDispatch();
    const state = useState();

    useEffect(() => {
        fetchAllEmployees()
            .then(data => {
                dispatch(setAllCards(data.cards));
                dispatch(setEmployeesAmount(data.cards.length));
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetchFilteredEmployees(props.filter)
            .then((data) => {
                dispatch(setAllCards(data));
                dispatch(setEmployeesAmount(data.length));
            })
            .catch((e) => console.log(e));
    }, [props.filter]);

    const getAllCards = (state) => state.allCardsReducer.allCards;
    const allCards = useSelector(getAllCards);

    const getCardsView = (state) => state.cardsViewReducer.isGrid;
    const cardsView = useSelector(getCardsView);

    const getEmployeesAmount = (state) => state.employeesAmountReducer.employeesAmount;
    const employeesAmount = useSelector(getEmployeesAmount);

    let child = (cardsView)
        ? <GridCards allCards={allCards}/>
        : <TableCards allCards={allCards}/>;

    const onTableViewButtonClick = () => dispatch(setTableView());
    const onGridViewButtonClick = () => dispatch(setGridView());

    return (
        <div className="cards-area">
            <div className="cards-area__info">
                <CardsNumber text={employeesAmount} />
                <GridViewButton
                    onClick={() => onGridViewButtonClick()}
                    isActive={cardsView}
                />
                <TableViewButton
                    onClick={() => onTableViewButtonClick()}
                    isActive={!cardsView}
                />
            </div>
            {child}
        </div>
    );
}
