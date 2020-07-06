import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (page) => {
        setActiveItem(page)
    }
    const setActive = (page) => {
        if (activeItem === page) {
            return "item active"
        }
        return "item"
    }

    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className={setActive("dashboard")} onClick={() => handleItemClick("dashboard")}>{currentUser.email}</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className={setActive("login")} onClick={() => handleItemClick("login")}>Login</Link>
                    <Link to="/register" className={setActive("register")} onClick={() => handleItemClick("register")}>Register</Link>
                </>
            )
        }

    }

    return (
        <div className="ui inverted menu">
            <Link to="/" className={setActive("home")} onClick={() => handleItemClick("home")}>Home</Link>
            {isAuthenticated ? <Link to="/pageone" className={setActive("pageone")} onClick={() => handleItemClick("pageone")}>Page One</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
