import React from 'react'

function Agent({id, img, name, title }) {
  return (
    <div className='agent'>
      <div className="agent__container">
        <img src={img} alt={id} className="agent__img"/>
        <h3>{name}</h3>
        <p>{title}</p>
        </div>
    </div>
  )
}

export default Agent
