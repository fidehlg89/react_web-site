import React from 'react'
import "./about.css"

const image = 'https://www.ledil.com/wp-content/uploads/2019/03/LEDiL-office-lighting-concept-examples-of-room-related-lighting-concept.jpg';

const About = () => (
    <div className="about">
        <div className="row">
            <div className="col-6">
                <p> Short Brief description about team workers and institution.</p>
            </div>
            <div className="col-6">
                <img src={image} alt="" className="src" width="500px" height="auto" />
            </div>
        </div>
    </div>
)

export default About
