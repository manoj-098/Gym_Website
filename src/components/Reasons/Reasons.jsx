import React from 'react'
import '../Reasons/Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import image_2 from '../../assets/image_2.png'

const Reasons = () => {
  return (
    <div className='reasons' id="reasons">
      <div className="reasons-images">
        <div className='left-r'>
          <img src={image1} alt=""></img>
        </div>
        <div className="middle-r">
          <div className="top-box">
            <img src={image2} alt=""></img>
          </div>
          <div className="bottom-box">
            <img src={image3} alt=""></img>
            <img src={image4} alt=""></img>
          </div>
          </div>

        </div>
        <div className='right-r'>
          <span className='span'>SOME REASONS</span>
          <div className='reason-box'>
               <div>
                  <span className='stroke-text'>WHY </span>
                  <span>CHOOSE </span>
                  <span>US?</span>
               </div>
               <div>
                  <img src={tick} alt=""></img>
                  <span>OVER 140+ EXPERT COACHS</span>
               </div>
               <div>
                  <img src={tick} alt=""></img>
                  <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
               </div>
               <div>
                  <img src={tick} alt=""></img>
                  <span>1 FREE PROGRAM FOR NEW MEMBER</span>
               </div>
               <div>
                  <img src={tick} alt=""></img>
                  <span>RELIABLE PARTNERS</span>
               </div>
          </div>
          <div className='footer-r'>OUR PARTNERS</div>
          <div className="footer-images">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      
    </div>
  )
}

export default Reasons
