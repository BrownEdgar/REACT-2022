import React, {useState}  from 'react';
import ShowArray from './ShowArray';

function App() {
	const [value, setValue] = useState(["React.js", "props", "state"])

	const addHandler = (index) => { 
		let copy = value.slice()
		copy.splice(index,1)
		setValue(copy)
	 }
	return (
		<div>
			<ShowArray data={value} addHandler={addHandler}/>

		</div>
	);
}

export default App;