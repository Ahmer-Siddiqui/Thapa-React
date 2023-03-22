import React, { useState } from "react";

const UseStateArray = () => {
  const arr = [
    { id: 0, name: "Ahmer", age: 20 },
    { id: 1, name: "Shafi", age: 20 },
    { id: 2, name: "Shahzar", age: 21 },
  ]
  const [newArr, setNewArr] = useState(arr);
  const clearArr = () => {
    setNewArr([]);
  };
  const deleteElem = (i) => {
    let newArray = newArr.filter((elem)=>{
      return elem.id !== i
    })
    setNewArr(newArray)
  };
  return (
    <>
      {newArr.map((elem , index) => (
          <h1 key={elem.id}>
            Name : {elem.name} & Age : {elem.age}
            <button onClick={()=> deleteElem(elem.id)}>Delete</button>
          </h1>
        
      ))}
      <button onClick={clearArr}>Clear</button>
    </>
  );
};

export default UseStateArray;
