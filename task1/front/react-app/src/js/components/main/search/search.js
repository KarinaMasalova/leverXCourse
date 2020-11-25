import React from "react";

import SearchKinds from './search-kinds';
import SearchContainer from './search-container';

export default function Search() {
    return (
        <div className="search">
            <SearchKinds/>
            <SearchContainer/>
        </div>
    );
}