import React, {useState} from 'react';
import { useTheme } from '../ThemeContext';
import './testimonials.css';
import MiniProfile from "./miniProfile/MiniProfile";
import photoMan1 from "./photo/photoMan1.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const { theme } = useTheme();

    const testimonialsDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
    };

    const profiles = [
        {
            image: photoMan1,
            text: 'Text for profile 1',
            name: 'Name 1',
            role: 'Role 1',
        },
        {
            image: photoMan1,
            text: 'Text for profile 2',
            name: 'Name 2',
            role: 'Role 2',
        },
        {
            image: photoMan1,
            text: 'Text for profile 3djbkf ajhsb dfhb asbasfbka dfjdjbkf ajhsb dfhb askldf bhfakdjbkf ajhsb dfhb asbasfbka dfjdjbkf ajhsb dfhb askldf bhfakdjbkf ajhsb dfhb asbasfbka dfjdjbkf ajhsb dfhb askldf bhfak',
            name: 'Name 3',
            role: 'Role 3',
        },
        {
            image: photoMan1,
            text: 'Text for profile 4',
            name: 'Name 4',
            role: 'Role 4',
        },

    ];

    return (
        <div style={testimonialsDivStyle} className="testimonialsDiv">
            <div className="testimonians-text-div">
                <span style={textNameStyle} className="about-me-text-main">Testimonials</span>
                <span style={textNameStyle} className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                    Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</span>
            </div>
            {/*<MiniProfile image={photoMan1}*/}
            {/*             text="djbkf ajhsb dfhb asbasfbka dfjdjbkf ajhsb dfhb askldf bhfakbhd fbasfbka dfjdjbkf ajhsb dfhb askldf bhfakbhd fbasfbka dfj djbkf ajhsb dfhb askldf bhfakbhd fbasfbka dfjksajf dfs fs dfg sfg sdfgsdf gsd fgsd fgs  djbkf ajhsb dfhb askldf bhfakbhd fbasfbka dfjksajf dfs fs dfg sfg sdfgsdf gsd fgsd fgs "*/}
            {/*             name="Ya"*/}
            {/*             role="CEo"/>*/}

            <div className="mini-profile-carousel">
                <Slider {...settings}>
                    {profiles.map((profile, index) => (
                        <MiniProfile
                            key={index}
                            image={profile.image}
                            text={profile.text}
                            name={profile.name}
                            role={profile.role}
                        />
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default Testimonials;
