import React from 'react'
import { Zangvac } from "./App"
export default function Child() {
  return (
	<div>
		<h1>Lorem ipsum dolor, </h1>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam soluta libero commodi, accusantium ad necessitatibus quia laborum temporibus incidunt unde expedita beatae corrupti, mollitia ipsam, iure animi facere! Voluptatum.</p>
		  <Zangvac.Consumer>
			{(value) => {
				  return <p>{value.data.map((elem,index) => {
					  return <span key={index}>{elem}</span>
				  })}</p>
			}}  
		  </Zangvac.Consumer>
	</div>
  )
}
