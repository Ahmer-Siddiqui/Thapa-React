import React, { useState } from 'react'

const UseStateArray = (props) => {
  const arr = [
      {id:0 , name: "Ahmer" , age: 20},
      {id:1 , name: "Shafi" , age: 20},
      {id:2 , name: "Shahzar" , age: 21}
    ]
    const [newArr , setNewArr] = useState(arr);
    const clearArr = () =>{
      setNewArr([])
    }
  return (
    <>
    {/* {arr.map((elem)=>{
        return (

      <h1 key={elem.id}>Name : {elem.name} & Age : {elem.age}</h1>
        )
    })}  */}

    {/* also use below statement */}

    {newArr.map((elem)=> <h1 key={elem.id}>Name : {elem.name} & Age : {elem.age}</h1>)} 
    <button onClick={clearArr}>Clear</button>
    </>
  )
}

export default UseStateArray