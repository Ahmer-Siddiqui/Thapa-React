import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [count , setCount] = useState(0)
    useEffect(()=>{
      if(count === 0){
        document.title = `Chats`
      }else{
        document.title = `Chats (${count})`
      }
    },[count])

    useEffect(()=>{
      console.log("Second useEffect");
    },[])
    
    const increment = ()=>{
        setCount(count + 1)
      }

      return (
        <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default UseEffect
