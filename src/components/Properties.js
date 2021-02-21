import React from 'react'
import Property from './Property'


function Properties({properties}) {
  return (
    <section className='properties'>
      <div className="properties__container">
        <h2>Properties</h2>
          <div className="properties-slider">
              {properties.map((property) => {
                return <Property key={property.id} {...property} />
              })}            
          </div>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <button>View all Property Listings</button>
    </section>
  )
}

export default Properties
