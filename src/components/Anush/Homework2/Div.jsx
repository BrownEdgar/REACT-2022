import React from 'react'
//import "./Data.json"

export default function div(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={props.deleter}>x</button>
    </div>
  )
}
