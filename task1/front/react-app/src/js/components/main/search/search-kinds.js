import React, { Component } from "react";

export default class SearchKinds extends Component {
    render() {
        return (
            <div className="search__kinds">
                <span className="search__kind active">basic search</span>
                <span className="search__kind">advanced search</span>
            </div>
        );
    }
}