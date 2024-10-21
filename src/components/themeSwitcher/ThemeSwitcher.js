import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="buttonSwitch" style={{
            background: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
