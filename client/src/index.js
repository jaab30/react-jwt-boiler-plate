import React from "react";
import reactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./style.css"

reactDOM.render(
    // Wrap all APP with the react redux provider and pass the redux store to have access to global state
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));