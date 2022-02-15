import React from "react";
import { ArrowBack } from '@mui/icons-material'
import './styles/Skills.css';
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <section className="skills">
            <h1 className="skills-1">SKILLS</h1>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Front End
                </h1>
                <p className="skills__text">
                    HTML | CSS | JavaScript | React | JQuery | Bootstrap | Styled Components
                </p>
            </div>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Tools and Deployment
                </h1>
                <p className="skills__text">
                    CLI | Git | Github | NPM | Yarn | Heroku
                </p>
            </div>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Back End
                </h1>
                <p className="skills__text">
                    Node.js | Nodemon | Express | JSON Web Tokens | Sessions and Cookies
                </p>
            </div>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Testing
                </h1>
                <p className="skills__text">
                    Jest
                </p>
            </div>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Computer Science
                </h1>
                <p className="skills__text">
                    Algorithms | Data Structures | Graphs
                </p>
            </div>
            <div className='skills__container'>
                <h1 className="skills__title">
                    Office
                </h1>
                <p className="skills__text">
                    Micrsoft Office (PowerPoint, Word, Excel) | Adobe
                </p>
            </div>
        </section>
    )
}

export default Skills;