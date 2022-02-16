
import React, { useState } from 'react'


export default function App() {

	const [value, setValue] = useState([1, 2, 5, 8, 9]);
	const [zzz, setzzz] = useState(false)

	const addArr = () => {
		let random = Math.trunc(Math.random() * 100 + 1);
		setValue([...value, random])
	}
	const delArr = () => {
		let random = Math.trunc(Math.random() * value.length);
		let copy = [...value];
		copy.splice(random, 1);
		setValue(copy)
	}

	const sum = () => {
		return value.reduce((a, b) => a + b, 0);
	}

	const total = () => {
		setzzz(!zzz)
	}


	return (
		<div>
			<div>
				<h1>{JSON.stringify(value)}</h1>
				<button onClick={addArr}>add</button>
				<button onClick={delArr}>delete</button>
				<button onClick={() => total()}>total</button>
			</div>
			<h1>{zzz ? sum() : "No total"}</h1>
		</div>
	)
}
