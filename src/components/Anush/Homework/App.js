import React, {useState} from 'react'
import ShowArray from './ShowArray'

export default function App() {
    const [value, setValue] = useState(["Red","Green"])
    const add=()=>{
        let copy =[...value]
        copy.push("Blue")
        setValue(copy)
    }
  return (
    <div>
        <ShowArray data={value}/>
        <button onClick={add}>AddColor</button>
    </div>
  )
}
