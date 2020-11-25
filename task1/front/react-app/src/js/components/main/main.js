import React from "react";
import { useSelector } from 'react-redux'

import Search from './search/search';
import CardsArea from './cards-area/cards-area';

export default function Main() {
    const getInputValue = (state) => state.searchInputValueReducer.inputValue;
    const inputValue = useSelector(getInputValue);
    
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <Search/>
                <CardsArea
                    filter={inputValue}
                />
            </div>
        </main>
    );
}