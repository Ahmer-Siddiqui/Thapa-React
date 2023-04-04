import React, { useState,useRef } from 'react'

const UnControlled = () => {


  const luckyName = useRef(null);
  const [show , setShow] = useState(false) 

  const submitForm = (e) =>{
    e.preventDefault();
    const userName = luckyName.current.value;
    userName === "" ? alert("plz fill the data") : setShow(true);
  }
  return (
    <div className='container'>
    <form action="" onSubmit={submitForm}>
        <label htmlFor="luckyName">Enter Your Lucky Name</label>
        <input type="text" id='luckyName' ref={ luckyName } />
        <br />
        <button>Submit</button>

    </form>
    <p>{ show ? `Your lucky name is ${userName}` : ""}</p>
    </div>
  )
}

export default UnControlled
