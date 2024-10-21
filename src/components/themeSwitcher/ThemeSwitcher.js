import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="buttonSwitch" style={{
            background: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
            height: "100%"
        }}>
            <button className="button-cv" onClick={toggleTheme}>
                Download CV
            </button>
        </div>
    );
};

export default ThemeSwitcher;
