import './App.css';
import ShowArray from'./ShowArray';
import React, {useState} from 'react';

function App() {
  const [value,setValue] = useState(["You Just React"])
  const addText = () =>{
    setValue(["Now You See React Developers, Don't You?"])
  }
  return (
    <div>
    <ShowArray data={value}/>
    <button onClick={()=> addText()}>CHANGE TEXT</button>
    </div>
  );
}

export default App;
