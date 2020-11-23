import React from "react";

import SearchKinds from './search-kinds';
import SearchContainer from './search-container';

export default function Search(props) {
    return (
        <div className="search">
            <SearchKinds/>
            <SearchContainer onSearchContainerSubmit={(text) => props.onSearchSubmit(text)}/>
        </div>
    );
}