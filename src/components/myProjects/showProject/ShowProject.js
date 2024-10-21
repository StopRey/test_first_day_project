import React from 'react';
import { useTheme } from '../../ThemeContext';
import './showProject.css';

function ShowProject({ image, textFirst, textSecond }) {
    const { theme } = useTheme();

    const showProjectDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={showProjectDivStyle} className="showProjectDiv">
            <div className="project-show-photo-container">
                <img className="project-show-photo" src={image} alt="Photo"/>
            </div>
            <span className="project-show-first-text">{textFirst}</span>
            <span style={textNameStyle} className="project-show-second-text">{textSecond}</span>
        </div>
    );
};

export default ShowProject;
