import React from 'react';
import './socialMediaBanner.css';

function SocialMediaBanner({ theme, image }) {

    return (
        <div className="social-media-banner-div">
            <div className="photo-container">
                <div className="circle-first"></div>
                <div className="circle-second"></div>
                <div className="circle-third"></div>
                <img src={image} alt="Photo"/>
            </div>
        </div>
    );
};


export default SocialMediaBanner;
