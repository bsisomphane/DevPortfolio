import React from 'react'
import './styles/Second.css'
import project from './assets/project.jpg'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>ABOUT ME</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={project} alt="" />
                </div>

                <div className="text-2">
                    <p>Front-End Developer</p>
                    <p>React js & Node js Developer</p>
                    <p>MERN Stack Developer</p>
                </div>
            </div>
        </section>
    )
}

export default Second;