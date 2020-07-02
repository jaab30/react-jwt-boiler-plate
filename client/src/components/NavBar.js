import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

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
            <Link to="/pagetwo" className={setActive("pagetwo")} onClick={() => handleItemClick("pagetwo")}>Page Two</Link>
            <Menu.Menu position='right'>
                <Link to="/dashboard" className={setActive("dashboard")} onClick={() => handleItemClick("dashboard")}>User Dashboard</Link>
                <Link to="/login" className={setActive("login")} onClick={() => handleItemClick("login")}>Login</Link>
            </Menu.Menu>
        </div>
    )
}

export default NavBar;
