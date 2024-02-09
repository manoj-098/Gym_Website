import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const[menuOpen, setmenuOpen]=useState(false)
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="logo"></img>
        
        <div className="bars-div" onClick={()=>setmenuOpen(!menuOpen)}>
        <img src={bars} className='bars'></img>
        </div>
        <ul className={menuOpen===true?'header-list open': 'header-list close'}>
            <li><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='hero'
            smooth={true} 
            >Home</Link></li>
            <li><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='programs'
            smooth={true}>Programs
            </Link></li>
            <li ><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='reasons'
            smooth={true}
 >Why us</Link></li>
            <li><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='pricing'
            smooth={true}>Plans</Link></li>
            <li><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='testimonials'
            smooth={true}>Testimonials</Link></li>
            <li><Link className='Link' onClick={()=>setmenuOpen(false)}
            to='join'
            smooth={true}>Contact</Link></li>

        </ul>
      
    </div>
  )
}

export default Header
