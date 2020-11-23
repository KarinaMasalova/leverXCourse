import React from "react";

import HeaderLogo from './header-logo';
import HeaderNavigation from './header-navigation';
import HeaderProfile from './header-profile';

export default function Header() {
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