import './App.css';
import ShowArray from'./ShowArray';
import React, {useState} from 'react';

function App() {
	const [value, setValue] = useState("Now You See React Developers, Don't You?")
  const addText = () =>{
    setValue("New content")
  }
  return (
    <div>
		<h1>{value}</h1>
    <button onClick={addText}>CHANGE TEXT</button>
    </div>
  );
}

export default App;
