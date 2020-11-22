import React, { Component } from "react";

import Search from './search/search';
import CardsArea from './cards-area/cards-area';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchInputValue: ''
        };
    }
    
    render() {
        return (
            <main className="main">
                <div className="wrapper main__wrapper">
                    <Search
                        onSearchSubmit={(text) => this.setState({ searchInputValue: text })}
                    />
                    <CardsArea
                        filter={this.state.searchInputValue}
                    />
                </div>
            </main>
        );
    }
}