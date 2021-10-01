import React from 'react';
import AboutCards from "./AboutCards";
import AuthorCard from './AuthorCard';
import "./About.css";
import profileLP from "./lp.png";
import profileMK from "./mk.png";

function About() {
    return (
        <div className="about">
           
            <div className="about__info">
            
                <AboutCards
                
                title="About JoJoBa"
                details="Imagination of a greener world can now be brought into reality with JoJoBa. Selling and purchasing of beautiful plants and related essentials is just a click away. 
                With your support, we aim to make the world greener, where purchasing of plants and plant products can be done with ease. At present, this app is under development, 
                and we hope it becomes fully functional sooner, and is ready to compensate the loss of green cover on this planet. We started to develop this app as a project, but now it is an emotion."
                />

            </div>
            <div className="about__by">
                <AuthorCard
                img={profileLP}
                    title="Lavanya Paradkar"
                    details="Full-stack developer."
                />
                <AuthorCard
                img={profileMK}
                    title="Malini Kar"
                    details="UI/UX Designer."
                />
            </div>

            
        </div>
    )
}

export default About
