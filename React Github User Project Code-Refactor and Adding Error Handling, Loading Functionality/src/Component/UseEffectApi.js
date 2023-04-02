import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);
  const [loading , setLoading] = useState(true)

  const getUsers = async ()=>{
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users');
      // const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      setUsers(await response.json())
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log("My Error is "+ error);
    }
  }
  useEffect(()=>{
    getUsers();
  },[])

  if(loading){
    return <Loading />
  }
  else{

  return (
    <>
    {users.map((elem,index)=>{
      return (
      <div className='cardContainer' key={index}>
        <p>{elem.login}</p>
      </div>
      )
    })}
    </>
  )
}
  }


export default UseEffectApi
