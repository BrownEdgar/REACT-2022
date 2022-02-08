import './App.css';
import ShowArray from'./ShowArray';
import React, {useState} from 'react';

function App() {
  const [value,setValue] = useState(["Noro","Anush", "Tigran", "Alex"])
  const deleteNames = (index) =>{
    let copy = value.slice()
    copy.splice(index,1)
    setValue(copy)
  }
  return (
    <div>
    <ShowArray data={value}/>
    <button onClick={()=> deleteNames(2)}>delete</button>
    </div>
  );
}

export default App;
