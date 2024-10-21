import React from 'react';
import { useTheme } from '../ThemeContext';
import './services.css';
import servicesFirstPhoto from './photo/firstServices.png';
import servicesSecondPhoto from './photo/secondServices.png';
import servicesThirdPhoto from './photo/thirdServices.png';
import servicesFourthPhoto from './photo/fourthServices.png';

const Services = () => {
    const { theme } = useTheme();

    const servicesDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={servicesDivStyle} className="servicesDiv">
            <div className="services-text-div">
                <span className="about-me-text-main">Services</span>
                <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
            </div>
            <div className="services-boxes-div">
                <div className="services-box">
                    <div className="services-box-photo-div">
                        <img className="services-box-photo" src={servicesFirstPhoto} alt="Photo"/>
                    </div>
                    <span className="sevices-text-middle">UI/UX</span>
                    <span className="services-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
                </div>
                <div className="services-box">
                    <div className="services-box-photo-div">
                        <img className="services-box-photo" src={servicesSecondPhoto} alt="Photo"/>
                    </div>
                    <span className="sevices-text-middle">Web Design</span>
                    <span className="services-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
                </div>
                <div className="services-box">
                    <div className="services-box-photo-div">
                        <img className="services-box-photo" src={servicesThirdPhoto} alt="Photo"/>
                    </div>
                    <span className="sevices-text-middle">App Design</span>
                    <span className="services-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
                </div>
                <div className="services-box">
                    <div className="services-box-photo-div">
                        <img className="services-box-photo" src={servicesFourthPhoto} alt="Photo"/>
                    </div>
                    <span className="sevices-text-middle">Graphic Design</span>
                    <span className="services-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
                </div>

            </div>
        </div>
    );
};

export default Services;
