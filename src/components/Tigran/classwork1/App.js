import React, { useState } from 'react'
import data from "./data.json"
import Box from "./Box"
import "./App.css"

export default function App() {
    const [info,setInfo] = useState(data);
    const [isHidden,setIsHidden] = useState(false);

    const deleter = (id)=>{
    let copy = [...info];
    copy = copy.filter(elem => elem.id !== id);
    setInfo(copy)
    }

    const toggleButton = ()=>{
        setIsHidden(!isHidden)
    }

  return (
    <div className="main">
        <h1>Our blog</h1>
        <button onClick={toggleButton}>{isHidden?"show":"hide"}</button>
        {!isHidden && <div className="container">
            {info.map(elem => {
                return <Box 
                key={elem.id}
                title={elem.title} 
                description={elem.description} 
                date={elem.date}
                deleter={()=>deleter(elem.id)}/>
            })} 
        </div>}
    </div>
  )
}
