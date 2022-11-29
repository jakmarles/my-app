import React, { useState } from 'react'

const Targil2 = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [res, setRes] = useState(number1 + number2)
  const Equalto = () =>{
      setRes (Number(number1)+Number(number2))
    }
  

  return (
    <div>
      <input placeholder='0' value={number1} onChange={e=>setNumber1(e.target.value)}></input>
        +
      <input placeholder='0' value={number2} onChange={e=>setNumber2(e.target.value)}></input><br/>
      <button onClick={()=>Equalto()}>Res</button>
      <h2>{res}</h2>
    </div>
  ) 

  }


export default Targil2