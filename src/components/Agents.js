import React from 'react'
import agents from '../agents'
import Agent from './Agent'


function Agents() {
  return (
    <div className='agents'>
      <h2>Agents</h2>
      {agents.map((agent) => {
        return <Agent key ={agent.id} {...agent} />
      })}
    </div>
  )
}

export default Agents
