import React from 'react'

function Property({img, price, beds, baths, sqft, address}) {
  return (
    <div className='property'>
      <img src={img} alt='image' />
         <div className="property-details">
          <p className="price">{price}</p>
            <span className="beds">{beds} beds</span>
            <span className="baths">{baths} baths</span>
            <span className="sqft">{sqft} sqft.</span>
            <address>{address}</address>
    </div>
  </div>
  )
}

export default Property
