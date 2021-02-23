import React, { useState } from 'react'
import clients from '../clients'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Clients() {
  const [index, setIndex] = useState(0)
  const {text, img, name} = clients[index]

 const checkNumber = (number) => {
   if(number < 0) {
     return clients.length - 1
   } if (number > clients.length - 1) {
     return 0
   }
   return number
 }  

  const prevClient = () => {
   setIndex((index) => {
     let newIndex = index - 1
     return checkNumber(newIndex)
   })
  }

  const nextClient = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  return (
    <section className='clients'>
      <h2>What Our Clients Are Saying</h2>
      <button className='prev-btn' onClick={prevClient}>
        <FaChevronLeft />
      </button>
        <div className="clients__container">
          <p>{text}</p>
          <div className="clients__img-container">
          <img src={img} alt={name}/>
          </div>
          <span>{name}</span>
        </div>
      <button className='prev-btn' onClick={nextClient}>
        <FaChevronRight />
      </button>
    </section>
  )
}

export default Clients
