import React, {useState} from 'react';
import { useTheme } from '../ThemeContext';
import './footer.css';
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Footer = () => {
    const { theme } = useTheme();

    const footerDivStyleTop = {
        backgroundColor: theme === 'light' ? '#F8F8F8' : 'black',
    };

    const footerDivStyleBottom = {
        backgroundColor: theme === 'light' ? '#545454' : '#121212',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    const iconColor = theme === 'dark' ? 'white' : 'black';

    return (
        <div className="footerDiv">
            <div style={footerDivStyleTop} className="footerDivTop">

                <div className="text-container">
                    <span className="highlight">M</span>
                    <p style={textNameStyle} className="text-name">uhammad</p>
                </div>

                <div className={`buttons-container ${theme}-theme`}>
                    <span className="theme-text">Home</span>
                    <span className="theme-text">About</span>
                    <span className="theme-text">Services</span>
                    <span className="theme-text">Projects</span>
                    <span className="theme-text">Testimonials</span>
                    <span className="theme-text">Contact Us</span>

                </div>

                <div className="svg-container-second">
                    <SocialIconFacebook color={iconColor}/>
                    <FacebookIcon color={iconColor}/>
                    <CustomIcon color={iconColor}/>
                    <LinkedInIcon color={iconColor}/>
                </div>

            </div>
            <div style={footerDivStyleBottom} className="footerDivBottom">
                <span className="footer-text-bottom">
                    © 2023 <span className="footer-text-bottom-highlight">Muhammad</span> All Rights Reserved, Inc.
                </span>
            </div>
        </div>
    );
};

const SocialIconFacebook = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="32px" height="32px">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" fill={color} />
    </svg>
);

const FacebookIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="32px" height="32px">
        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" fill={color} />
    </svg>
);


const CustomIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px">
        <path
            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            fill={color}
        />
    </svg>
);

const LinkedInIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill={color} />
    </svg>
);

export default Footer;
