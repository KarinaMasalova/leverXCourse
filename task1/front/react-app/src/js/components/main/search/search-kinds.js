import React, { Component } from "react";

export default class SearchKinds extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search__kinds">
                <span className="search__kind active">basic search</span>
                <span className="search__kind">advanced search</span>
            </div>
        );
    }
}