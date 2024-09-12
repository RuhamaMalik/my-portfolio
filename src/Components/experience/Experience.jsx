import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience" className='experience'>
    <h5 className= 'text-center' id="my-text">What skills I Have</h5>
      <h2 className="text-light text-center " id="my-text">My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Redux</h4>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Material Ui</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Chakra Ui</h4>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>React JS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Next JS</h4>
            </article>
            
            
          </div>
      </div>
      {/* End FRONTEND DEVELOPMENT */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Node JS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4> MongoDB</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4> Firebase</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Express JS</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>SQL</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Sequelizer</h4>
            </article>
            
          </div>
      </div>

      {/* Libraries */}

      <div className="experience__backend">
      <h3>Other Skills</h3>
      
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4>TypeScript</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4> Material UI</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <h4> Chakra UI</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Git and Githb</h4>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Tailwind Css</h4>
            </article>
            
          </div>
      </div>

    </div>
   </section>
  )
}

export default Experience