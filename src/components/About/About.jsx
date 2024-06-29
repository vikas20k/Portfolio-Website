import React from 'react'
import './About.css'
import photo from "../../assets/images/photo.jpeg"

function About() {
    return (
        <div className='about' id='about'>
            <div className='aboutTitle'>
                <h1 >About Me</h1>
                <hr />
            </div>
            <div className='aboutSection'>
                <div className='aboutLift' ></div>
                <img src={photo} alt='' />

                <div className='aboutRight'>
                    <ul className='aboutPera'>
                        <li>I am a passionate and dedicated frontend developer eager to start my professional journey in web development. </li>
                        <li>I honed my skills in HTML, CSS, JavaScript, and various frontend frameworks such as React.</li>
                        <li>I am excited to bring my creativity, problem-solving skills, and enthusiasm for web development to a dynamic team where I can continue to grow and contribute to impactful projects.

                        </li>
                    </ul>
                    <div className='aboutSkills'>
                        <div className='aboutSkill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className='aboutSkill'><p>Tailwind</p><hr style={{ width: "60%" }} /></div>
                        <div className='aboutSkill'><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className='aboutSkill'><p>React Js</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='aboutAchievements'>
                <div className='aboutAchievement'>
                    <h1>0+</h1>
                    <p>Fresher</p>
                </div>
                <hr />

                <div className='aboutAchievement'>
                    <h1>5+</h1>
                    <p>Completed Projects</p>
                </div>
                <hr />
                <div className='aboutAchievement'>
                    {/* <h1>10+</h1>
                    <p>vikas</p> */}
                </div>



            </div>
        </div>
    )
}

export default About