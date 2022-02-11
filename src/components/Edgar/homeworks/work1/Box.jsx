import React from 'react'

export default function Box(props) {
  return (
	<div>
		  <p>AxionVip | {props.date} </p>
		  <h1>{props.title}</h1>
		  <p>{props.description}</p>
		  <button onClick={props.deleter}>X</button>
	</div>
  )
}
