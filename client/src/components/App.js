import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const App = () => {
    return (
        <>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={UserDashboard} />
                    <Route path="/pageone" component={PageOne} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
