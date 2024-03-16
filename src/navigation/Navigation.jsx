import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import './nav.css';

const Navigation = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default Navigation;
