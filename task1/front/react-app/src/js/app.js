import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import MainAuth from './components/main-auth/main-auth';
import MainRegister from './components/main-register/main-register';
import FullInfoCard from './components/main/main-full-card/main-full-card';
import MainSettings from './components/main/main-settings/main-settings';

import '../styles/style.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/register" component={MainRegister}/>
                    <Route path="/authorize" component={MainAuth}/>
                    <Route path="/full-info-card" component={FullInfoCard}/>
                    <Route path="/settings" component={MainSettings}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
