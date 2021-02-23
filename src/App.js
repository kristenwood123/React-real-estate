import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

import { FaHome, FaDollarSign, FaChartLine } from 'react-icons/fa'
import './index.css'

//components
import Properties from  './components/Properties'
import Navbar from './components/Navbar'
import Agents from './components/Agents'
import Services from './components/Services'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {

  return (
    // <BrowserRouter>
   
    <div className="App">
      <div className="App__hero">
        <div className="fade"></div>
      <Navbar />
        <div className='App__header'>
          <div className="App__header-text">
           <h1>Buy and sell real estate properties</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur quod vero amet commodi voluptas facilis corporis ea fuga unde.</p>
          </div>
        </div>     
      </div>  
           <div className='App__how-it-works'>
             <h1>How It Works</h1>
                <section>
                  <div className="how-it-works-wrapper">
                    <div className='App__home'>
                      <span className='icon'><FaHome /></span>
                      <h2>Find a Property</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                      <div className='App__dollar'>
                        <span className='icon'><FaDollarSign /></span>
                        <h2>Buy a Property</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>

                      <div className='App__investing'>
                          <span className='icon'><FaChartLine /></span>
                        <h2>Investing a Property</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                </section>
                
              <Properties 
              />
              <Agents />
              <Services />
              <Clients />
            <section className='contact'>
              <div className="contact__container">
                <h2>Contact Us</h2>
                  <form action="submit" type='text'>
                      <label for="name">Name</label>
                      <input type="text" placeholder='Full name'/>

                      <label for="email">Email</label>
                      <input type="email" placeholder='Email'/>

                      <label for="subject">Subject</label>
                      <input type="subject" placeholder='Subject'/>

                      <label for="message">Message</label>
                      <input type="text" placeholder='message'/>

                      <button className='contact__button'>Send Message</button>
                  </form>

                  <div className='contact__information'>
                     <label>Address</label>
                    <address>
                        20377 Evergreen Terrace Mountain View, California, USA 
                    </address>

                    <label>Phone</label>
                    <a href="#">232-232-2323</a>

                    <label>Email Address</label>
                    <a href="#">ouremail@domain.com</a>
                  </div>
                </div>
            </section>
           </div> 
          <Footer />       
    </div>
    
  //</BrowserRouter>
  
  );
}

export default App;
