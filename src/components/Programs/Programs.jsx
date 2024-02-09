import React from 'react'
import '../Programs/Programs.css'
import {programsData} from '../../data/programsData'
import Arrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id="programs">
        <div className="programs-header"> 
            <span className='stroke-text'>EXPLORE OUR </span>
            <span>PROGRAMS </span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>
        <div className="programs-data">
            {programsData.map((program)=>{return(
            <div className='data-description' key={program.id}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Join now</span>
                    <img src={Arrow} alt=""></img>
                </div>
            </div>
            )})}
        </div>
    </div>
  )
}

export default Programs
