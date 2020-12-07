import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import OneRequestCard from './one-request-card';
import YearIdentifier from './year-identifier';
import RequestDetails from '../pop-up/request-details/request-details';
import ChangeRequestPopup from "../pop-up/change-request/change-request";
import ConfirmationPopup from "../pop-up/confirmation/confirmation";
import { fetchAllRequestCards } from '../../../repository/repository';
import setAllRequestCards from '../../../store/actionCreators/setAllRequestCards';
import setAvailableDays from "../../../store/actionCreators/setAvailableDays";

export default function AllRequests() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllRequestCards()
            .then(data => {
                dispatch(setAllRequestCards(data));
                const reservedDays = data.reduce((acc, current) => {
                    if (current.type !== 'Sick leave') {
                        acc += current.durationInDays;
                    }
                    return acc;
                }, 0);
                dispatch(setAvailableDays(reservedDays));
            })
            .catch(err => console.log(err));
    }, []);

    function groupBy(key, arr) {
        return arr.reduce((objWithGroups, request) => {
            const year = request[key];
            if (year in objWithGroups) {
                return {
                    ...objWithGroups,
                    [year]: objWithGroups[year].concat(request)
                }
            }
            return {
                ...objWithGroups,
                [year]: [request]
            }
        }, {});
    }

    const getAllRequestCards = (state) => state.allRequestCardsReducer.allRequests;
    const allRequests = useSelector(getAllRequestCards);
    const groupedAllRequests = groupBy('year', allRequests);

    return (
        <div className="all-requests-container">
            <div className="all-requests">
                <p className="all-requests__title">My Leave Requests</p>
                { Object.entries(groupedAllRequests).map(([year, requests]) => {
                    return (
                        <Fragment key={year}>
                            <YearIdentifier year={year}/>
                            { requests.map((request) => (
                                <OneRequestCard
                                    className={(request.type === 'Vacation')
                                        ? 'request-card__icon request-card__icon_vacation'
                                        : (request.type === 'Sick leave')
                                            ? 'request-card__icon request-card__icon_sick-leave'
                                            : 'request-card__icon request-card__icon_own-expense'
                                    }
                                    cardInfo={request}
                                    key={request.id}
                                />))
                            }
                            <Switch>
                                <Route path="/details/:id" render={() => <RequestDetails/> }/>
                                <Route path="/change" render={() => <ChangeRequestPopup/> }/>
                                <Route path="/confirm" render={() => <ConfirmationPopup/> }/>
                            </Switch>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
}