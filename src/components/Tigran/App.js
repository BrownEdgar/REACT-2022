import React, { useState } from 'react';
import ShowArr from "./ShowArr";
import "./App.css"



export default function App() {
	const [value, setValue] = useState("React.js", "props", "state")
	
	const [text, setText] = useState("Now You See React Developers, Don't You?")

	const addHandeler = (index) => {
		let copy = [...value];
		copy.splice(index, 1)
		setValue(copy)

	}
	
	const changeText = () => {
		setText("New content")
	}


	return <div>
		<ShowArr data={value} addHandeler={addHandeler} />
		<h1>{text}</h1>
		<button onClick={changeText}>Change Text</button>

	</div>;
}

