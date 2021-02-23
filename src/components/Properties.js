import React, {useState} from 'react'
import Property from './Property'
import properties from '../properties'


function Properties() {
   const [index, setIndex] = useState(0)
  const {img, price, beds, baths, sqft, address} = properties[index]
  const handleNext = ()=> {
    console.log('next')
  }

  const handlePrev = () => {
    console.log('previous')
  }

  return (
    <section className='properties'>
      <div className="properties__container">
        <h2>Properties</h2>
          <button className='prev-btn' onClick={handlePrev}>PREVIOUS</button><span>/</span>
          <button className='next-btn' onClick={handleNext}>NEXT</button>
          <div className="properties-slider">
              {/* {properties.map((property) => {
                return <Property key={property.id} {...property} />
              })}             */}
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
