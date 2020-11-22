import React, { Component } from 'react'

export default class SearchButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button className="button button_colored search__button" type="submit">search</button>
    }
}
