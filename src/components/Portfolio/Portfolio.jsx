import React from 'react'
import './Portfolio.css'
import myDeta from '../../assets/Jsfile/Mywork'
import { FaArrowRightLong } from "react-icons/fa6";

function Portfolio() {
    return (
        <div className='mywork' id='portfolio'>
            <div className='myworkTitle'>
                <h1 >Portfolio</h1>
                <hr />
            </div>
            <div className='myworkContainer'>
                {myDeta.map((work, index) => {

                    return <span className='card' key={work.id} ><a href={work.link}><img src={work.img} alt=' ' width="20%" />
                    </a>
                        <p>{work.name}</p>
                        <p>{work.details}</p>
                    </span>


                })}

            </div>
            <div className='myworkShowmore'>
                <p>Show More  <FaArrowRightLong /></p>
            </div>
        </div>

    )
}

export default Portfolio