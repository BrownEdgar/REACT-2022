import React from 'react'
import "./App.css"

export default function Button(props) {
  console.log(props)

  return (
    <div>
        <button onClick={props.change}>{props.name}</button>
    </div>
  )
}
