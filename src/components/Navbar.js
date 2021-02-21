import React from 'react'
import '../index.css'
import {FaPhoneAlt, FaEnvelope, FaBars} from 'react-icons/fa'

const Navbar = () => {

const navUl = document.getElementById('nav-ul')
const showMenu = () => {
  navUl.classList.toggle('show')
}

  return (
    <div className='Navbar'>
      <div className="navbar__logo-wrapper">
        <button className="navbar__hamburger" id='hamburger' onClick={showMenu}><FaBars/></button>
        <ul className='Navbar__links' id='nav-ul'>
          <li><a href="#"></a>HOME</li>
          <li><a href="#"></a>PROPERTIES</li>
          <li><a href="#"></a>AGENTS</li>    
          <li><a href="#"></a><FaPhoneAlt/></li>        
          <li><a href="#"></a><FaEnvelope/></li>        
        </ul>
      </div>
     
      
    </div>
  )
}

export default Navbar
