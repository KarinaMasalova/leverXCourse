import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function FormButton(props) {
    // const { pathname } = useLocation();
    // console.log(pathname);
    return (
        <Link to={`${props.linkTo}`}
            className={props.className}
        >{props.text}</Link>
    );
}