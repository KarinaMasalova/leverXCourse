import React from 'react';

export default function FormButton(props) {
    return <button className={props.className}>{props.text}</button>;
}