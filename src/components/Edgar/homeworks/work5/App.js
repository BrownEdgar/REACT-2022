import React, {useReducer, useState} from 'react'
import reducer from "./reduser"
import { TYPES } from "./types";
export default function App() {
	const [name, setname] = useState("narek")
	const [state, dispatch] = useReducer(reducer, {count:0});
	const handlerChange = (e) => { 
		console.log(e.target.value);
		setname(e.target.value)
	 }
  return (
	<div>
		  <h1>{name}</h1>
		  <button onClick={() => dispatch({ type: TYPES.DECREMENT })}>minus</button>
		  <button onClick={() => dispatch({ type: TYPES.RESET })}>reset</button>
		  <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>plus</button>
		  <input type="text" onChange={handlerChange} value={name}/>
		  <input type="text" onChange={handlerChange} value={name}/>
	</div>
  )
}
