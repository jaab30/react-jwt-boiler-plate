import React from 'react'
import { LogoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <a href="/" style={{ border: "none", cursor: "pointer" }} className="item" onClick={() => { dispatch(LogoutUser()) }}>
            Logout
        </a>
    )
}

export default Logout;
