import React from "react";
// import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import '../styles/style.scss';

export default function App() {
    return (
        <div>
            <Header/>
            <Main/>
            {/* <Switch>
                <Route exact path="/" component={Main}/>
            </Switch> */}
            <Footer/>
        </div>
    );
}
