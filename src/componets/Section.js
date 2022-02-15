import React from 'react'
import './styles/Section.css'
import man from '../componets/assets/man.jpg'

const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'>Bailey Sisomphane</h1>
                    <p>Professional Full-Stack React js Developer.</p>
                    <button className='text-button'>My Work</button>
                </div>

                <div className="image">
                    <img src={man} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section;