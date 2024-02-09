import React from 'react'
import '../Footer/Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className='blur footer-blur-left'></div> */}
      {/* <div className='blur footer-blur-right'></div> */}
        <hr /><br />
        <div className='footer-images'>
            <a href=""><img src={github} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={twitter} alt="" /></a>


            
        </div>
        <div className="copyrights">
            <span>&copy;Fintech Private Limited,2010</span>
        </div>

    </div>
  )
}

export default Footer
