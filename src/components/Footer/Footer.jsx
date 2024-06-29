import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { useContext } from 'react';
import { contextApp } from '../useContextApi/useContextApi';
import logo from "../../assets/images/logo.png"

function Footer() {
    const { emailOutlook, phone, location, gitHub } = useContext(contextApp)
    return (
        <div className='footer'>
            <hr />
            <div className='footerTop'>
                <div className='footerTopLeft'>
                    <img src={logo} alt='' width='50px' />
                    <p>I'm Vikas Kumar, frontend developer from India.</p>
                    <div className='deta'>
                        <p> <MdOutlineMailOutline />{emailOutlook}</p>
                        <p><FaPhoneAlt />{phone}</p>
                        <p> <IoLocationOutline />{location}</p>
                        <p> <FaGithub />{gitHub}</p>

                    </div>
                </div>
                <div className='copyRight'>&copy; 2024 vikas kumar</div>
                <div className='footerTopRight'>
                    <div className='icon'>
                        <a href='https://www.instagram.com/vikas__k07/?igsh=YzljYTk1ODg3Zg%3D%3D'><FaInstagram /></a>
                        <a href='https://x.com/07Viikaas'><BsTwitterX /></a>
                        {/* <a href=''><CiFacebook /></a> */}
                        <a href='https://github.com/vikas20k'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/vikas-kumar-2908792bb/'><FaLinkedin /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer