import React from 'react';
import './about.css';
import me from '../../assets/images/me.jpeg';

const About = () => {
  return (
   <section id='about' className='about'>
    <h5 className= 'text-center' id="my-text">Get to know</h5>
      <h2 className="text-light text-center " id="my-text">About Me</h2>

    <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
              <img src={me} alt="About Image" />
          </div>
      </div>

      <div className="about__content align-center">
        <p>I look forward to bringing my strong creative, technical, and analytical skills to Full-Stack Development with developing and delivering user-centric applications and solutions.
            Throughout my career, I have been recognized as a professional who is focused on finding solutions and is capable of designing and developing cutting-edge applications using cutting-edge technologies.</p>

           <a href="#contact" className='btn btn-outline-light button w-50'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
