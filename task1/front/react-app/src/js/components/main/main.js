import React, { Component } from "react";

import Search from './search/search';
import CardsArea from './cards-area/cards-area';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrapper main__wrapper">
                    <Search/>
                    <CardsArea/>
                </div>
            </main>
        );
    }
}