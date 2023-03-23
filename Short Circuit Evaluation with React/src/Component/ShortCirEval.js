import React, { useState } from 'react'

const ShortCirEval = () => {
    const [demo , setDemo] = useState("");
  return (
    <div>
    {/* In OR : if one  or all condition is true left data excute  */}
    {/* In AND : if  all condition is true right data excute*/}
      <h1>{"left data" || demo}</h1>
      <h1>{demo || "right data"}</h1>
      <h1>{demo && "right data"}</h1>
      <h1>{"left data" && demo}</h1>
    </div>
  )
}

export default ShortCirEval
