import React, { Component } from "react";

import SearchKinds from './search-kinds';
import SearchContainer from './search-container';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search">
                <SearchKinds/>
                <SearchContainer onSearchContainerSubmit={(text) => this.props.onSearchSubmit(text)}/>
            </div>
        );
    }
}