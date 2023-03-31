import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ruhama-malik-116b61228" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/RuhamaMalik" target="_blank"><FaGithub /></a>
      <a href="https://www.facebook.com/ruhama.ruhama.9421450?mibextid=ZbWKwL" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial;