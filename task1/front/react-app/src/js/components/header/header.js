import React, { Component } from "react";

import HeaderLogo from './header-logo';
import HeaderNavigation from './header-navigation';
import HeaderProfile from './header-profile';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <div className="wrapper header__wrapper">
                    <HeaderLogo/>
                    <HeaderNavigation/>
                    <HeaderProfile/>
                </div>
            </header>
        );
    }
}