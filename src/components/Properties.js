import React, {useState} from 'react'
import Property from './Property'
import properties from '../properties'
// import Carousel from 'react-elastic-carousel'


function Properties() {
   const [index, setIndex] = useState(0)
  const {img, price, beds, baths, sqft, address} = properties[index]

  const checkNumber = (number) => {
    if(number > properties.length - 1) {
      return 0
    } if (number < 0) {
      return properties.length - 1
    }

    return number
  }


  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  
  }

  const handlePrev = () => {
     setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  return (
    <section className='properties'>
      <div className="properties__container">
        <h2>Properties</h2>
          <button className='prev-btn' onClick={handlePrev}>PREVIOUS</button><span>/</span>
          <button className='next-btn' onClick={handleNext}>NEXT</button>
          <div className="properties-slider">
              <Property 
                img={img}
                price={price}
                beds={beds}
                sqft={sqft}
                baths={baths}
                address={address}
              />
          </div>
      </div>
      <button>View all Property Listings</button>
    </section>
  )
}

export default Properties
