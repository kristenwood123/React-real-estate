import React, { useState } from 'react'
import clients from '../clients'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function Clients() {
  const [index, setIndex] = useState(0)
  const {text, img, name} = clients[index]
  return (
    <section className='Clients'>
      <h2>What Our Clients Are Saying</h2>
      <button className='prev-btn'>
        <FaChevronLeft />
      </button>
          <p>{text}</p>
          <div className="clients__img-container">
          <img src={img} alt={name}/>
          </div>
          <span>{name}</span>
      <button className='prev-btn'>
        <FaChevronRight />
      </button>
    </section>
  )
}

export default Clients
