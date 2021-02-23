import React from 'react'
import {FaHome, FaDollarSign, FaChartLine, FaRegBuilding, FaSearch, FaMobile } from 'react-icons/fa'

function Services() {
  return (
    <section className='services'>
      <h2>Services</h2>
      <div className="services__container">
        <div className='services__item'>
           <span className='services__icon'><FaHome/></span>
              <div className="services__item__container">
                <h3>Search Property</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <a href="#">Learn More</a>
              </div>
          </div>
        
        <div className='services__item'>
          <span className='services__icon'><FaDollarSign/></span>
            <div className="services__item__container">
              <h3>Buy Property</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
        </div>

        <div className='services__item'>
          <span className='services__icon'><FaChartLine/></span>
            <div className="services__item__container">
              <h3>Search Property</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
          </div>
        </div>

        <div className='services__item'>
          <span className='services__icon'><FaRegBuilding/></span>
            <div className="services__item__container">
              <h3>Investing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
          </div>
        </div>

        <div className='services__item'>
          <span className='services__icon'><FaSearch/></span>
            <div className="services__item__container">
              <h3>List a Property</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
        </div>
      </div>

        <div className='services__item'>
          <span className='services__icon'><FaMobile/></span>
            <div className="services__item__container">
              <h3>Property Location</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services
