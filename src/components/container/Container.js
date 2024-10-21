import React from 'react';
import { useTheme } from '../ThemeContext';
import './container.css';

const Container = ({ children }) => {
    const { theme } = useTheme();

    const containerStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        minHeight: '100vh',
        width: '100%',
    };

    return (
        <div style={containerStyle} className="container">
            {children}
        </div>
    );
};

export default Container;
