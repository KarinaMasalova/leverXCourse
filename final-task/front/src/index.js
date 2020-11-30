import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './js/store/store';

import App from "./js/app";

ReactDOM.render(
    // <Provider store={store}>
        // <BrowserRouter>
            <App />,
        // </BrowserRouter>
    // </Provider>,
    document.getElementById("root")
);
