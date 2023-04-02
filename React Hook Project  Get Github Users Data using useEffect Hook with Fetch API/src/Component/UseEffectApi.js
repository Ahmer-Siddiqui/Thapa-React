import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async ()=>{
    // const response = await fetch('https://api.github.com/users');
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = await response.json();
    setUsers(data)
  }
  useEffect(()=>{
    getUsers();
  },[])

  return (
    <>
    {users.map((elem,index)=>{
      return (
      <div className='cardContainer' key={index}>
        <p>{elem.title}</p>
      </div>
      )
    })}
    </>
  )
}

export default UseEffectApi
