import React from 'react'
import IntroStyle from "./Intro.module.css"
import vikas from "../../assets/images/vikas.pdf"
import photo from "../../assets/images/photo1.png"



function Intro() {
    return (
        <div className={IntroStyle.main} id='home'>
            <img className={IntroStyle.photoImg} src={photo} alt='' />
            <h1 className={IntroStyle.heading}><span className={IntroStyle.headingSpan}>I'm Vikas Kumar,</span> frontend developer.</h1>
            <p className={IntroStyle.deta}>I am a  fresher frontend developer.</p>
            <div className={IntroStyle.introAction}>
                <div><a href='#contact' className={IntroStyle.introConnect}>Connect With Me</a></div>
                <a href={vikas} className={IntroStyle.introResume} target='_blank'>My resume</a>

            </div>
        </div>
    )
}

export default Intro