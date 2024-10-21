import React from 'react';
import { useTheme } from '../ThemeContext';
import './bannerFirst.css';
import SocialMediaBanner from "./socialMediaBanner/SocialMediaBanner";
import photoFirst from './socialMediaBanner/photo/photoFirst.png';

const BannerFirst = () => {
    const { theme } = useTheme();

    const bannerFirstDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    return (
        <div style={bannerFirstDivStyle} className="bannerFirstDiv">
            <div style={bannerFirstDivStyle} className="bannerFirstDivLeft">
                <div className={`text-container-left ${theme}-theme`}>
                    <span className="banner-text-first">Hi I am</span>
                    <span className="banner-text-second">Muhammad Bin Jameel</span>
                    <span className="banner-text-main-left">UI & UX</span>
                    <span className="banner-text-main-right">Designer</span>
                    <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                        Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                        Aliquet ornare tellus consectetur lacus</span>

                    <button className="button-banner">Hire Me</button>
                </div>
            </div>
            <div style={bannerFirstDivStyle} className="bannerFirstDivRight">
                <SocialMediaBanner theme={theme} image={photoFirst}/>
            </div>
        </div>
    );
};

export default BannerFirst;
