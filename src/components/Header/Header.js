import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/about'>About</Link>

        </header>
    )
}