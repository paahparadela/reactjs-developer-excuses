import React from 'react'
import DeveloperCard from './DeveloperCard'

export default function DeveloperExcuses(props) {
    const {excuses} = props
    
  return (

    <ul className='main'>
        {excuses.map((excuse, excuseIndex) => {
            return (
                <DeveloperCard {...props} key={excuseIndex} index={excuseIndex}>
                    <p>{excuse}</p>
                </DeveloperCard>
            )
        })}
    </ul>
  )
}
