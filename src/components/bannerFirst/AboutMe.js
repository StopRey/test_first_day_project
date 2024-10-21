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
        <div style={bannerFirstDivStyle} className="bannerFirstDiv">
            <div style={bannerFirstDivStyle} className="bannerFirstDivRight">
                <SocialMediaBanner theme={theme} image={photoSecond}/>
            </div>
            <div style={bannerFirstDivStyle} className="aboutFirstDivLeft">
                <div className={`text-container-left ${theme}-theme`}>
                    <span className="about-me-text-main">About Me</span>
                    <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                        Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                        Aliquet ornare tellus consectetur lacus</span>

                </div>
                <div className={`ranges-container ${theme}-theme`}>
                    <div className="first-range">
                        <span className="banner-text-first">UX</span>
                        <div className="first-range-show">
                            <div className="long-range-back"></div>
                            <div className="long-range-orange-first"></div>
                            <div className="long-range-circle-first"></div>
                        </div>
                    </div>
                    <div className="first-range">
                        <span className="banner-text-first">Website Design</span>
                        <div className="first-range-show">
                            <div className="long-range-back"></div>
                            <div className="long-range-orange-second"></div>
                            <div className="long-range-circle-second"></div>
                        </div>
                    </div>
                    <div className="first-range">
                        <span className="banner-text-first">App Design </span>
                        <div className="first-range-show">
                            <div className="long-range-back"></div>
                            <div className="long-range-orange-third"></div>
                            <div className="long-range-circle-third"></div>
                        </div>
                    </div>
                    <div className="first-range">
                        <span className="banner-text-first">Graphic Design </span>
                        <div className="first-range-show">
                            <div className="long-range-back"></div>
                            <div className="long-range-orange-fourth"></div>
                            <div className="long-range-circle-fourth"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
