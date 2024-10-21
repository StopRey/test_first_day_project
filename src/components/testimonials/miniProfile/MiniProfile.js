import React from 'react';
import './miniProfile.css';

function MiniProfile({ image, text, name, role }) {

    return (
        <div className="mini-profile-div">
            <div className="mini-profile-div-left">
                <img src={image} alt="Photo" className="mini-profile-photo"/>
            </div>
            <div className="mini-profile-div-right">
                <div>
                    <span className="mini-profile-text">{text}</span>
                </div>
                <div className="mini-profile-text-div">
                    <span className="mini-profile-name">{name}</span>
                    <span className="mini-profile-role">{role}</span>
                </div>
            </div>
        </div>
    );
};


export default MiniProfile;
