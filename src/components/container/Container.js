import React from 'react';
import { useTheme } from '../ThemeContext';

const Container = ({ children }) => {
    const { theme } = useTheme();

    const containerStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
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
