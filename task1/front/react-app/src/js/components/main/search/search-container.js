import React, { Component } from "react";

export default class SearchContainer extends Component {
    render() {
        return (
            <form className="search__container" method="GET" action="#">
                <span className="search__icon"></span>
                <input className="search__input" type="text" placeholder="Search..." autoComplete="off" autoFocus/>
                <button className="button button_colored search__button" type="submit">search</button>
            </form>
        );
    }
}