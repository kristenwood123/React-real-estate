import React from 'react'

function Agent({id, img, name, title }) {
  return (
    <div className='agent'>
        <img src={img} alt=""/>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default Agent
