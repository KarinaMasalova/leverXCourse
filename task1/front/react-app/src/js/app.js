import React, { Component } from "react";

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import '../styles/style.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
