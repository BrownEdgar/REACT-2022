import React from 'react'

function Box(props) {
  return (
    <div>
        <p>Axonvip | {props.date}</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={props.deleter}>Read more</button>
    </div>
  )
}

export default Box