import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 >Hello I'm</h5>
        <h1>Ruhama Gull</h1>
        <h5 className="text-light">Mern Stack Developer</h5>
        <CTA />
        <HeaderSocial />


       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;