import React, {useState} from 'react'
import ShowArray from './ShowArray'

export default function App() {
    const [value, setValue] = useState(["Red","Green"])
    const [data, setdata] = useState(["Change content"])


    const add=()=>{
        let copy =[...value]
        copy.push("Blue")
        setValue(copy)
    }
    const change=(x)=>{
        setdata("Changed content")
    }
  return (
    <div>
        <h1>{data}</h1>
        <ShowArray data={value} change={change}/>
        <button onClick={add}>AddColor</button>
        <button onClick={change}>Change</button>

    </div>
  )
}
