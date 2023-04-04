import React, { useReducer, useState } from 'react'


const reducer = (state, action)=>{
  if(action.type === "INC"){
    return state + 1;
  }
  else if(action.type === "DEC"){
    return state - 1;
  }
  else if(action.hi === "doThis"){
    return "Ahmer You Brillant"
  }
  
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer , 0)
  return ( 
    <div className='main'>
      <h1>{state}</h1>
      <button onClick={()=> dispatch({type: "INC"})}>Increment</button>
      <button onClick={()=> dispatch({type: "DEC"})}>Decrement</button>
      <button onClick={()=> dispatch({type: "MUL",hi: "doThis"})}>See Result</button>
    </div>
  )
}

export default UseReducer
