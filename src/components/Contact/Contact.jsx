import React, { useState } from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { contextApp } from '../useContextApi/useContextApi';
import { useContext } from 'react';


function Contact() {
    const { phone, emailOutlook, location, gitHub } = useContext(contextApp)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [textarea, setTextarea] = useState("")
    const [error, setError] = useState("")
    const [sendmessage, setSendmessage] = useState("")
    const key = "9ad18b07-cbc9-4d91-81bd-cba9d5929625"

    const onSubmit = async (event) => {
        event.preventDefault();
        if (name.length == 0 || email.length == 0 || textarea.length == 0) {
            setError("Fill your details !!!")
            setSendmessage('')
        }
        else {
            const formData = new FormData(event.target);

            formData.append("access_key", `${import.meta.env.VITE_API_KEY}`);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            // if (res.success) {
            //     alert(res.message)



            // }
            setSendmessage('Successfully sent your details. !')
            setError('')

        }
        setEmail('')
        setName('')
        setTextarea('')
    };


    return (
        <div className='contact' id='contact'>
            <div className='contactTitle'>
                <h1 >Contact me</h1>
                <hr></hr>
            </div>
            <div className='contactSection'>
                <div className='contactLeft'>
                    <h1>Let's talk</h1>
                    <p> I'm currently avaliable to take on new project ,So feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='contactDetails'>
                        <div className='contactDetail'>
                            <p> <MdOutlineMailOutline /> {emailOutlook}</p>

                        </div>
                        <div className='contactDetail'>
                            <p><FaPhoneAlt />{phone}</p>

                        </div>
                        <div className='contactDetail'>
                            <p> <IoLocationOutline />{location}</p>
                        </div>
                        <div className='contactDetail'>
                            <p> <FaGithub /> {gitHub}</p>
                        </div>
                    </div>
                </div>
                <form className='contactRight' onSubmit={onSubmit}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name ' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <h6 className='sendData'>{sendmessage}</h6>
                    <h6 className='error'>{error}</h6>
                    {/* {error && name.length <= 0 ? <h6 className='error'>Name can't be empty!!</h6> : <h6 className='sendData'>Successfully send email !</h6>} */}
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email ' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h6 className='sendData'>{sendmessage}</h6>
                    <h6 className='error'>{error}</h6>
                    {/* {error && name.length <= 0 ? <h6 className='error'>Email can't be empty!!</h6> : <h6 className='sendData'>Successfully send email !</h6>} */}
                    <label htmlFor='message'>Write your message here</label>
                    <textarea name='message' id='message' placeholder='Enter your message....' value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
                    <h6 className='sendData'>{sendmessage}</h6>
                    <h6 className='error'>{error}</h6>
                    {/* {error && name.length <= 0 ? <h6 className='error'>Textarea can't be empty!!</h6> : <h6 className='sendData'>Successfully send email !</h6>} */}
                    <button type=' submit' className='contactSumbit' > Submit now</button>




                </form>
            </div>
        </div>
    )
}

export default Contact