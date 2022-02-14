import React, {useState} from 'react'
import ForP from './Components/ForP'
import Button from './Components/Button'

export default function App() {
    const [value, setValue] = useState([1,2,3,4,5,6])


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
    let copy =[...value]
    let x=copy.reduce((a,b)=>a+b)
}
  return (
    <div>
        <ForP data={value} />
        <h1> Total </h1>
        <Button name="AddRandomNumber" change={addRandomNumber}/>
        <Button name="RemoveRandomNumber" change={removeRandomNumber}/>
        <Button name="Total" change={total}/>
        
    </div>
  )
}
