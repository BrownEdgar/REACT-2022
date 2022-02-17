import React from 'react'
import "./App.scss"

export default function Try(props) {
  return (
    
        <tr>
          <td>{props.title}</td>
          <td>{props.genre}</td>
          <td>{props.stock}</td>
          <td>{props.rate}</td>
          <td><button onClick={props.deleter}>Delete</button></td>
        </tr>
  
  )
}