import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
   <div className="cta">
    <a href={CV} download className='btn btn-outline-light'>Download C.V</a>
    <a href="#contact" className='btn   btn-outline-light button'>Let's Talk</a>
   </div>
  )
}

export default CTA