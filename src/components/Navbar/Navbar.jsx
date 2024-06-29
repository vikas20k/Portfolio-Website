import React, { useState, useRef, useEffect } from 'react'
import Navbarstyle from './Navbar.module.css';
import { FaGithub } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import logo from "../../assets/images/logo.png"

function Navbar() {

    //responsible mobile 
    const [menu, setMenu] = useState('home')

    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = '0px'
    }

    const openClose = () => {
        menuRef.current.style.right = '-350px'
    }


    // darkmode fuction 
    const [mode, setMode] = useState("dark-mode")
    const modeChange = () => {
        if (mode === "dark-mode") {
            setMode("light-mode")
        } else {
            setMode("dark-mode")
        }
    }

    useEffect(() => {
        document.body.className = mode;

    }, [mode])



    return (
        <>
            <nav className={Navbarstyle.navbar}>
                <img width='50px' className={Navbarstyle.img} src={logo} alt='' />
                <div className={Navbarstyle.navMobile} ><GiHamburgerMenu onClick={openMenu} /></div>
                <ul ref={menuRef} className={Navbarstyle.navMenu}>
                    <span className={Navbarstyle.navMobClose}> <IoMdClose onClick={openClose} className={Navbarstyle.color} /></span>
                    <li onClick={() => setMenu("home")}><a href='#home' className={Navbarstyle.menuLink}>Home</a>{menu === "home" ? <hr className={Navbarstyle.menuhr} /> : <></>}</li>
                    <li onClick={() => setMenu("about")}><a href='#about' className={Navbarstyle.menuLink}>About Me</a>{menu === "about" ? <hr className={Navbarstyle.menuhr} /> : <></>}</li>
                    <li onClick={() => setMenu("portfolio")}><a href='#portfolio' className={Navbarstyle.menuLink}>Portfolio</a> {menu === "portfolio" ? <hr className={Navbarstyle.menuhr} /> : <></>}</li>
                    <li onClick={() => setMenu("contact")}><a href='#contact' className={Navbarstyle.menuLink}>Contact</a>{menu === "contact" ? <hr className={Navbarstyle.menuhr} /> : <></>}</li>



                </ul>
                <div className={Navbarstyle.mode}>
                    <a href='https://github.com/vikas20k' target='_blank' className={Navbarstyle.gitHub}> <FaGithub /></a>
                    <span className={Navbarstyle.darkMode} onClick={modeChange}>{mode == "dark-mode" ? <MdOutlineDarkMode />
                        : <CiLight />}</span>
                </div>


                <a href='#contact' className={Navbarstyle.navConnect}>Connect With Me</a>



            </nav>
        </>
    )
}

export default Navbar