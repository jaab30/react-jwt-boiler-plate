import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {

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

    return (
        <div className="ui inverted menu">
            <Link to="/" className={setActive("home")} onClick={() => handleItemClick("home")}>Home</Link>
            <Link to="/pageone" className={setActive("pageone")} onClick={() => handleItemClick("pageone")}>Page One</Link>
            <div className="right menu">
                <Link to="/dashboard" className={setActive("dashboard")} onClick={() => handleItemClick("dashboard")}>User Dashboard</Link>
                <Link to="/login" className={setActive("login")} onClick={() => handleItemClick("login")}>Login</Link>
            </div>
        </div>
    )
}

export default NavBar;
