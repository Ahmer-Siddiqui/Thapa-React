import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [widthCount,setWidthCount] = useState(window.screen.width);

    const actualWidth = ()=>{
      setWidthCount(window.screen.width)
    }
    useEffect(()=>{
      window.addEventListener("resize",actualWidth);
      console.log("Add Event");
      return ()=>{
        window.removeEventListener("resize",actualWidth);
        console.log("remove Event");
      }
    })
  return (
    <div>
      <p>The actual size of the window is</p>
      <h1>{widthCount}</h1>

    </div>
  )
}

export default UseEffect2
