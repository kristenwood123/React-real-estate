import React from 'react'
import agents from '../agents'
import Agent from './Agent'


function Agents() {
  return (
    <>
    <div className="agent__heading">
      <h2>Agents</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corporis.</p>
    </div>
    <div className='agents'>
      {agents.map((agent) => {
        return <Agent key ={agent.id} {...agent} />
      })}
    </div>
    </>

  )
}

export default Agents
