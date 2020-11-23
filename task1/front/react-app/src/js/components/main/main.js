import React, { useState } from "react";

import Search from './search/search';
import CardsArea from './cards-area/cards-area';

export default function Main() {
    const [state, setState] = useState({ searchInputValue: '' });
    
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <Search
                    onSearchSubmit={(text) => setState({ searchInputValue: text })}
                />
                <CardsArea
                    filter={state.searchInputValue}
                />
            </div>
        </main>
    );
}