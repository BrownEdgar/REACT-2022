import React from 'react'
import { Func } from "./App"
function comp2() {
	return (
		<div>
			<h1>Lorem ipsum dolor sit amet.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
			<Func.Consumer>
				{(value)=>{
					return <p>{JSON.stringify(value.metod,null,1)}</p>
				}}
			</Func.Consumer>
		</div>
	)
}

export default comp2