import React, {useState} from 'react';
import { useTheme } from '../ThemeContext';
import './letsDesign.css';

const LetsDesign = () => {
    const { theme } = useTheme();

    const letsDesignDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={letsDesignDivStyle} className="letsDesignDiv">
            <div className="projects-text-div">
                <span className="about-me-text-main">Lets Design Together</span>
                <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                    Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</span>
            </div>


            <form className="form-bottom">
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="form-input"
                />
                <button type="submit" className="form-button">
                    Contact Me
                </button>
            </form>
        </div>
    );
};

export default LetsDesign;
