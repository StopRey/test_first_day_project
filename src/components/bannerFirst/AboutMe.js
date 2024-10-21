import React from 'react';
import { useTheme } from '../ThemeContext';
import './aboutMe.css';
import SocialMediaBanner from "./socialMediaBanner/SocialMediaBanner";
import photoSecond from './socialMediaBanner/photo/photoSecond.png';

const AboutMe = () => {
    const { theme } = useTheme();

    const bannerFirstDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    return (
        <div style={bannerFirstDivStyle} className="aboutFirstDiv">
            <div style={bannerFirstDivStyle} className="bannerFirstDivRight">
                <SocialMediaBanner theme={theme} image={photoSecond}/>
            </div>
        </div>
    );
};

export default AboutMe;
