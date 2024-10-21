import React from 'react';
import { useTheme } from '../ThemeContext';
import './navbar.css';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div className="navbarDiv">
            <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>

        </div>
    );
};

export default Navbar;
