import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
// enter your email js id here
    emailjs.sendForm('service_ybhaed4', 'template_ew6i8md', form.current, 'jiitdfNxo1h_xyJ_7', { user_email: e.target.email.value })
    e.target.reset()
  };



  return (
    <section id="contact" className='contact'>
      <div className="rep">
        <div className="rep2">
             
      <h5 className= 'text-center' id="my-text">Get In Touch</h5>
      <h2 className="text-light text-center " id="my-text">Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>

            {/* Enter YOUR email here */}

            <a href="mailto:malikruhama7@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/ruhama.ruhama.9421450" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/ruhama-malik-116b61228" target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-outline-light button'>Send Message</button>
        </form>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Contact