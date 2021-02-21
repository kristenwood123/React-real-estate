import React, {useState} from 'react'
import properties from '../properties'

function Properties() {
  const [index, setIndex] = useState(0)

  const { id, img, price, beds, baths, sqft, address } = properties[index]

  return (
    <section className='properties'>
      <div className="properties__container">
        <h2>Properties</h2>
          <div className="properties-slider">
            <div>
              <img src={img} alt=""/>
            </div>
          </div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </section>
  )
}

export default Properties
