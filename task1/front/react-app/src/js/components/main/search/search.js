import React, { Component } from "react";

import SearchKinds from './search-kinds';
import SearchContainer from './search-container';

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <SearchKinds/>
                <SearchContainer/>
            </div>
        );
    }
}