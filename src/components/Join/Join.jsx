import React,{useRef} from 'react'
import '../Join/Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  return (
    <div className='join' id="join">
        <div className='left-j'>
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form className='join-form' action='https://formspree.io/f/xayredqr' method="POST">
                <span>GET IN TOUCH</span>
                <label><input type="text" name="name" required placeholder="Enter your Name"/></label>
                <label><input type="email" name="email" required placeholder='Drop your Email here'/>
                </label>
                {/* <label><input type="text" name= /></label> */}
                <button className='btn' type="submit">Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
