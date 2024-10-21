import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="buttonSwitch" style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
