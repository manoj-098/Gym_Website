import React,{useState} from 'react'
import '../Testimonials/Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {

    const transition={
                    type:'spring',
                    duration:'3'
    }
    const[index,setIndex]=useState(0)
    const len=testimonialsData.length

  return (
    <div className='testimonials' id="testimonials">
        <div className='left-t'>
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <motion.span
            key={index}
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition}}
            >{testimonialsData[index].review}</motion.span>
            {/* <span>{testimonialsData[index].review}</span> */}
            <span>
                {testimonialsData[index].name} <span> - {testimonialsData[index].status}</span>
            </span>
        </div>
        <div className='right-t'>
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition}}
            ></motion.div>
                       <motion.div
            initial={{opacity:0,x:+10}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition}}
            ></motion.div>
            <motion.img 
            key={index}
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition}}
            src={testimonialsData[index].image}/>
            {/* <div></div>
            <div></div>
            <img src={testimonialsData[index].image}/> */}
            <div className='arrows'>
                    <img src={leftArrow} alt="" onClick={()=>index==0?setIndex(len-1):setIndex(index-1)}/>
                    <img src={rightArrow} alt="" onClick={()=>index==len-1?setIndex(0):setIndex(index+1)} />
            </div>
        </div>
    </div>
  )
}

export default Testimonials

