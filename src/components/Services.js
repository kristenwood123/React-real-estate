import React from 'react'
import {FaHome, FaDollarSign, FaChartLine, FaRegBuilding, FaSearch, FaMobile } from 'react-icons/fa'

function Services() {
  return (
    <section className='services'>
      <div className="services__container">
        <div>
          <div><FaHome/></div>
          <h3>Search Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>
        
        <div>
          <div><FaDollarSign/></div>
          <h3>Buy Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>

        <div>
          <div><FaChartLine/></div>
          <h3>Search Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>

        <div>
          <div><FaRegBuilding/></div>
          <h3>Investing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>

        <div>
          <div><FaSearch/></div>
          <h3>List a Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>

        <div>
          <div><FaMobile/></div>
          <h3>Property Location</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Services
