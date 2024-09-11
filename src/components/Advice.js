import React, { useState } from 'react'
import './Advice.css'

export const Advice = () => {
  const [advice,setAdvice]=useState("Please click below button to get an advice...")
  const [count,setcount]=useState(0)
async function getAdvice(){
const res=await fetch("https://api.adviceslip.com/advice")
const data=await res.json()
console.log(data)
setAdvice(data.slip.advice)
setcount((c)=>c+1)
  }
  return (
    <div className='advice'>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice...</button>
        <p>You are read {count} pieces of advices...</p>
    </div>
  )
}
