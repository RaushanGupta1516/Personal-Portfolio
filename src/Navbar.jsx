


import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className="navbox" id="navbar">
            <img src="logo.jpg" alt="logo" height="60px" />
            <ul className={`ul ${isMenuOpen ? "active" : ""}`}>
                <AnchorLink href="#home" className="anchorlink" offset={50}>
                    <li onClick={toggleMenu}>Home</li>
                </AnchorLink>
                <AnchorLink href="#about" className="anchorlink" offset={50}>
                    <li onClick={toggleMenu}>About Me</li>
                </AnchorLink>
                <AnchorLink href="#services" className="anchorlink" offset={50}>
                    <li onClick={toggleMenu}>Services</li>
                </AnchorLink>
                <AnchorLink href="#mywork" className="anchorlink" offset={50}>
                    <li onClick={toggleMenu}>Portfolio</li>
                </AnchorLink>
                <AnchorLink href="#contact" className="anchorlink" offset={50}>
                    <li onClick={toggleMenu}>Contact</li>
                </AnchorLink>
            </ul>
            <AnchorLink href="#contact">
                <button id="connect" className="navconnect">Connect With Me</button>
            </AnchorLink>
            <img
                className="menubtn"
                src={isMenuOpen ? "close.svg" : "menu.svg"}
                alt="menu"
                onClick={toggleMenu}
            />
        </div>
    );
};

export default Navbar;
