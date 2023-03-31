import './App.css';
import Nav from './Components/nav/Nav.jsx'
import Header from './Components/header/Header.jsx'
import React from 'react';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Experience from './Components/experience/Experience';

function App() {
  return (
    <div >
      <Header />
      <Nav />
      <Contact />
      <About />
      <Experience />
      <Portfolio />

    
      <Footer />
    </div>
  );
}

export default App;
