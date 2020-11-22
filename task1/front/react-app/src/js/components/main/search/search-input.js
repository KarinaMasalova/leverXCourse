import React, { Component } from 'react'

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input 
                className="search__input"
                type="text"
                placeholder="Search..."
                autoComplete="off"
                autoFocus
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }
}
