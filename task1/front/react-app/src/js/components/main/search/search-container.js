import React, { Component } from "react";

import SearchInput from './search-input';
import SearchButton from './search-button';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearchContainerSubmit(this.state.inputValue.toLowerCase());
    }

    render() {
        return (
            <form className="search__container" method="GET" action="#" onSubmit={this.handleSubmit}>
                <span className="search__icon"></span>
                <SearchInput value={this.state.inputValue} onChange={this.handleChange}/>
                <SearchButton/>
            </form>
        );
    }
}