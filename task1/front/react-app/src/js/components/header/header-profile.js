import React from "react";

import AuthorizedUser from './authorized-user';
import UnauthorizedUser from './unauthorized-user';

export default function HeaderProfile() {
    let status = sessionStorage.getItem('status');

    const userProfile = (status !== null) 
        ? (<AuthorizedUser/>)
        : (<UnauthorizedUser/>);
    return userProfile;
}