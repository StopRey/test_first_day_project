import React from 'react';
import { useTheme } from '../ThemeContext';
import './navbar.css';

const Navbar = () => {
    const { theme } = useTheme();

    const navbarDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    return (
        <div style={navbarDivStyle} className="navbarDiv">
            <div className="text-container">
                <span className="highlight">M</span>
                <p className={`text-name ${theme}-theme`}>uhammad</p>
            </div>

            <div className={`buttons-container ${theme}-theme`}>
                <span className="theme-text">Home</span>
                <span className="theme-text">About</span>
                <span className="theme-text">Services</span>
                <span className="theme-text">Projects</span>
                <span className="theme-text">Testimonials</span>
                <span className="theme-text">Contact Us</span>
                <button className="button-cv">Download CV</button>
            </div>


        </div>
    );
};

export default Navbar;
