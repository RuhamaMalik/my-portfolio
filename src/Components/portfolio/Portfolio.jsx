import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/portfolio1.png'
import IMG2 from '../../assets/images/portfolio2.png'
import IMG3 from '../../assets/images/portfolio3.png'
import IMG4 from '../../assets/images/portfolio4.png'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.png'
import IMG7 from '../../assets/images/portfolio7.png'
import IMG8 from '../../assets/images/portfolio8.png'
import IMG9 from '../../assets/images/portfolio9.png'
import IMG10 from '../../assets/images/portfolio10.png'
import IMG11 from '../../assets/images/portfolio11.png'
import IMG12 from '../../assets/images/portfolio12.png'
import IMG13 from '../../assets/images/portfolio13.png'
import IMG14 from '../../assets/images/portfolio14.png'



const data =[
  {
    id : 1,
    image: IMG1,
    github : 'https://github.com/RuhamaMalik/todoApp',
    demo : 'https://rg-todo-app-js.netlify.app/'
  },
  {
    id : 2,
    image: IMG2,
    github : 'https://github.com',
    demo : 'https://tangerine-tiramisu-911d49.netlify.app'
  },
  {
    id : 3,
    image: IMG3,
    github : 'https://github.com/RuhamaMalik/Simple-Form',
    demo : 'https://authantication-form-homepage.netlify.app/'
  },
  {
    id : 4,
    image: IMG4,
    github : 'https://github.com/RuhamaMalik/Foodiest',
    demo : 'https://rg-foodiest.netlify.app'
  },
  {
    id : 5,
    image: IMG5,
    github : 'https://github.com/RuhamaMalik/yt-Portfolio',
    demo : 'https://ytportolioapp.netlify.app'
  },
  {
    id : 6,
    image: IMG6,
    github : 'https://github.com/RuhamaMalik/Quiz_App',
    demo : 'https://chakraquiz.netlify.app'
  },
  {
    id : 7,
    image: IMG7,
    github : 'https://github.com/RuhamaMalik/Calculator_App',
    demo : 'https://simple-calculator-51535.firebaseapp.com/'
  },
  {
    id : 8,
    image: IMG8,
    github : 'https://github.com/RuhamaMalik/hospital_app',
    demo : 'https://hospital-app-55729.firebaseapp.com/'
  },
  {
    id : 9,
    image: IMG9,
    github : 'https://github.com/RuhamaMalik/OLX_home-page_Replica',
    demo : 'https://olx-homepage-replica.firebaseapp.com/'
  },
  {
    id : 10,
    image: IMG10,
    github : 'https://github.com/RuhamaMalik/addToCart',
    demo : 'https://ecom-app-cart.netlify.app/'
  },
  {
    id : 11,
    image: IMG11,
    github : 'https://github.com/RuhamaMalik/UserList',
    demo : 'https://user-select-unselect-table.netlify.app/'
  },
  {
    id : 12,
    image: IMG12,
    github : 'https://github.com/RuhamaMalik/_firebase/tree/master/firebase_realtime_db',
    demo : 'https://crud-post.netlify.app/'
  },
  {
    id : 13,
    image: IMG13,
    github : 'https://github.com/RuhamaMalik/web-3.0-And-Metaverse-course/tree/main/assignment2%20html/landingPage',
    demo : 'https://landing-page-7152e.web.app/'
  },
  {
    id : 14,
    image: IMG14,
    github : 'https://github.com/RuhamaMalik/social-app',
    demo : 'https://social-app-s.netlify.app/'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
      
      <h5 className= 'text-center' id="my-text">My Recent Work</h5>
      <h2 className="text-light text-center " id="my-text">Portfolio</h2>
      <div className=" portfolio__container">
       {
         data.map(({id , image,title , gihub,demo}) => {
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img className='img' src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={gihub} className='btn btn-outline-light'>GitHub</a>
          <a href={demo} className='btn btn-outline-light button ' target="_blank">Live Demo</a>
          </div>
        </article>
          )
        })
       }
        
      </div>
    </section>
  )
}

export default Portfolio