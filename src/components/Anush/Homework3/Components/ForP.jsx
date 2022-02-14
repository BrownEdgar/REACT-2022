import React from 'react'
import "./App.css"

export default function ForP(props) {
  return <div>
       {props.data.map((elem,index)=>{
            return <h2 key={index}>{elem}</h2>
          })
        }
    </div>
  
}
