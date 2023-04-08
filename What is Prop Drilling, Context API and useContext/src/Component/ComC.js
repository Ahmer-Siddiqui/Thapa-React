import React, { useContext } from 'react'
import { BioData } from '../App'

const ComC = () => {
    const myName = useContext(BioData)
  return (
    <div>
      <h1>Hello {myName}</h1>
    </div>
  )
}

export default ComC
