import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OneRequestCard from './one-request-card';
import YearIdentifier from './year-identifier';
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
                                    type={request.type}
                                    startDate={request.startDate}
                                    endDate={request.endDate}
                                    durationInDays={request.durationInDays}
                                    creationDate={request.creationDate}
                                    approve={request.approve}
                                    key={request.id}
                                />))
                            }
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
}