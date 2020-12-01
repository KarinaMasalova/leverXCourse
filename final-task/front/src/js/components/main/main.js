import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NewRequestContainer from './new-request/new-request-container';
import AllRequests from './all-requests/all-requests';
import { fetchAllRequestCards } from '../../repository/repository';
import setAllRequestCards from '../../store/actionCreators/setAllRequestCards';

export default function Main() {
    const dispatch = useDispatch();
    const state = useState();

    useEffect(() => {
        fetchAllRequestCards()
            .then(data => dispatch(setAllRequestCards(data)))
            .catch(err => console.log(err));
    }, []);

    const getAllRequestCards = (state) => state.allRequestCardsReducer.allRequests;
    const allRequests = useSelector(getAllRequestCards);
    
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <NewRequestContainer/>
                <AllRequests allRequests={allRequests}/>
            </div>
        </main>
    );
}