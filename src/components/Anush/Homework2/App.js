import React,{useState} from 'react'
import data from"./Data.json"
import  "./App.css"
import Div from "./Div"

export default function App() {
    const[value, setValue]=useState(data)

    const deleter=(id)=>{
      let copy=[...value];
      copy = copy.filter(elem => elem.id !== id)
      setValue(copy)

    }
    if(value.length ===0){
      return <h1 className='text'> No Div content</h1>
    }

  return (
        <div className='main'>
        <div className='container'>
        {value.map(elem=>{
            return <Div
                        key={elem.id}
                        title={elem.title}
                        description={elem.description}
                        deleter={()=>deleter(elem.id)}/>
        })}

        </div>
    </div>
  )
}
