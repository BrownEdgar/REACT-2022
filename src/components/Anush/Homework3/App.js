import React, {useState} from 'react'
import ForP from './ForP'
import Button from "./Button" 
import "./App.css"

export default function App() {
    const [value, setValue] = useState([1,2,3,4,5,6])
    const [zzz, setzzz] = useState(false)


   const addRandomNumber=()=>{
        let copy =[...value]
        let x=Math.trunc(Math.random()*100)
        copy.push(x)
        setValue(copy)
    }
    const removeRandomNumber=()=>{
      let copy =[...value]
      let x=Math.trunc(Math.random()*copy.length)
      copy.splice(x,1)
      setValue(copy)
  }

  const total=()=>{
   return value.reduce((a,b)=>a+b)
}

  const z=()=>{
    setzzz(!zzz)
 }

  return (
    <div>
        <ForP data={value} />
        {zzz && <h1>Total {total()}</h1>}
        <Button name="AddRandomNumber" change={addRandomNumber}/>
        <Button name="RemoveRandomNumber" change={removeRandomNumber}/>
        <Button name="Total" change={z}/>
    </div>
  )
}
