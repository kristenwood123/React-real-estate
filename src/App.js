import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FaHome, FaDollarSign, FaChartLine } from 'react-icons/fa'
import properties from './properties'

//components
import Properties from  './components/Properties'
import Navbar from './components/Navbar'
import Agents from './components/Agents'
import Services from './components/Services'

function App() {
  console.log(properties)
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />    
           <h1>Buy and sell real estate properties</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur quod vero amet commodi voluptas facilis corporis ea fuga unde.</p>   
           <div className='App__how-it-works'>
             <h1>How It Works</h1>
                <section>
                <div className='App_home'>
                  <span><FaHome /></span>
                  <h2>Find a Property</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore?</p>
                </div>

                  <div className='App__dollar'>
                    <span><FaDollarSign /></span>
                    <h2>Find a Property</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore?</p>
                  </div>

                  <div className='App__investing'>
                      <span><FaChartLine /></span>
                    <h2>Find a Property</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore?</p>
                  </div>
                </section>
              <Properties 
                properties={properties}
              />
              <Agents />
              <Services />
           </div>        
    </div>
  </BrowserRouter>
  );
}

export default App;
