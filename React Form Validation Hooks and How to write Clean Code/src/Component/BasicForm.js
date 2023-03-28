import React, { useState } from 'react'

const BasicForm = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e)=>{
    if(email && password){e.preventDefault();
    const newEntry = {email: email , password: password};
    setAllEntry([...allEntry,newEntry]);
    setEmail("");
    setPassword("");}
    else{
      alert("Please fill the input filled")
    }
  }

  
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
      </form>
      {allEntry.map((elem,index)=>{
        return (
          <h1 key={index}>Email: {elem.email} - Password : {elem.password}</h1>

        )
      })}
      
    </>
  )
}

export default BasicForm
