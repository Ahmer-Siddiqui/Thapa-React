import React, { useContext } from 'react'
import { MyName } from '../App'

const ComC = () => {
    const myLastName = useContext(MyName);
  return (
    <div>
      <h1>Ahmer {myLastName}</h1>
    </div>
  )
}

export default ComC
