import React from 'react'
import { Link } from "react-router-dom";
import { LogoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <Link className="item" onClick={() => { dispatch(LogoutUser()) }}>
            Logout
        </Link>
    )
}

export default Logout;
