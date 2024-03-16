import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import './nav.css';

const Navigation = ({ children }) => {
    return (
        <div className="container">
            <NavBar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
};

export default Navigation;
