import React, {useState} from 'react';
import { useTheme } from '../ThemeContext';
import './testimonials.css';

const Testimonials = () => {
    const { theme } = useTheme();

    const testimonialsDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={testimonialsDivStyle} className="testimonialsDiv">
            <div className="projects-text-div">
                <span className="about-me-text-main">Testimonials</span>
                <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                    Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</span>
            </div>

        </div>
    );
};

export default Testimonials;
