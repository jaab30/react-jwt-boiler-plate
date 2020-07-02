import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={UserDashboard} />
                <Route path="/pageone" component={PageOne} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Router>
        </>
    )
}

export default App;
