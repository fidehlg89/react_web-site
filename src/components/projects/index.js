import React from 'react'
import "./projects.css"


const project_img = 'https://image.freepik.com/free-photo/double-exposure-image-business-person_31965-2441.jpg';

const projects = [
    { id: 1, title: 'Project 1', text: 'Some text descripton', image: project_img },
    { id: 2, title: 'Project 2', text: 'Some text descripton', image: project_img },
    { id: 3, title: 'Project 3', text: 'Some text descripton', image: project_img }
]

const Projects = () => (
    <div className="">
        <div className="project-intro container">
            <p>Integer vulputate porta elit, fringilla mollis mag luctuInter malesuada fames ac ante ipsum primis in fauci. Pellentesqin aliquam enim, quis lobortis arcu. Curabitur quiultrices est malesuada fames ac ante ipsum primis.</p>
        </div>
        <div className="project-cards container">
            {
                projects.length > 0 ? projects.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.text}</p>
                        </div>
                    </div>
                )) : null
            }

        </div>
    </div>
)

export default Projects