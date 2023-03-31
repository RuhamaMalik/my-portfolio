import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
   <footer id='footer'>
    <ul className='permalink'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__social">
      <a href="https://www.facebook.com/ruhama.ruhama.9421450?mibextid=ZbWKwL" target="_blank"><FaFacebookF /></a>
      <a href="https://www.linkedin.com/in/ruhama-malik-116b61228" target="_blank"><AiFillLinkedin /></a>
      <a href="mailto:malikruhama7@gmail.com" target="_blank"><MdEmail/></a>
    </div>
   </footer>
  )
}

export default Footer