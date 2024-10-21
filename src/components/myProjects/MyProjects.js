import React, {useState} from 'react';
import { useTheme } from '../ThemeContext';
import './myProjects.css';
import uiuxPhoto from './photo/uiuxPhoto.png';
import uiux2Photo from './photo/uiux2Photo.png';
import graphPhoto from './photo/graphPhoto.png';
import appPhoto from './photo/appPhoto.png';
import webPhoto from './photo/webPhoto.png';
import ShowProject from "./showProject/ShowProject";

const MyProjects = () => {
    const { theme } = useTheme();

    const projectsDivStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
    };

    const textNameStyle = {
        color: theme === 'light' ? 'black' : 'white',
    };

    const [selectedCategory, setSelectedCategory] = useState('UI UX');

    const projects = [
        { id: 1, category: 'UI UX', image: uiuxPhoto,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 2, category: 'UI UX', image: uiuxPhoto,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 3, category: 'UI UX', image: uiuxPhoto,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 4, category: 'Website Design', image: webPhoto,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 5, category: 'Website Design', image: uiux2Photo,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 6, category: 'App Design', image: appPhoto,  textSecond: 'AirCalling Landing Page Design ' },
        { id: 7, category: 'Graphic Design', image: graphPhoto,  textSecond: 'Description 4 Description 4' },
        { id: 8, category: 'Graphic Design', image: graphPhoto,  textSecond: 'Description 4 Description 4' },
    ];

    const categories = ['All', 'UI UX', 'Website Design', 'App Design', 'Graphic Design'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div style={projectsDivStyle} className="projectsDiv">
            <div className="projects-text-div">
                <span className="about-me-text-main">My Projects</span>
                <span className="banner-text-bottom">Lorem ipsum dolor sit amet consectetur.
                            Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante.
                            Aliquet ornare tellus consectetur lacus</span>
            </div>

            <div className="buttons-project-container">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>


            <div className="projects-display">
                {filteredProjects.map(project => (
                    <ShowProject
                        key={project.id}
                        image={project.image}
                        textFirst={project.category}
                        textSecond={project.textSecond}
                    />
                ))}
            </div>

        </div>
    );
};

export default MyProjects;
