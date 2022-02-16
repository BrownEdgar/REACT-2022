import React, { useState } from 'react'
import data  from "./data.json";
import "./App.css"
import Box from './Box';

export default function App() {
	const [info, setInfo] = useState(data);
	const [isHidden, setisHidden] = useState(false);

	const deleter = (id) => { 
		let newInfo = [...info];
		newInfo = newInfo.filter(elem => elem.id !== id);
		setInfo(newInfo)
	 }
	 const toggleButton = () => { 
		 setisHidden(!isHidden)
	  }

  return (
	  <div className='main'>
		  <h1>Our blog</h1>
		  <button onClick={toggleButton}>{isHidden ? "show" : "hide"}</button>
		  {!isHidden && <div className="container">
			  {info.map(elem => {
				  return <Box
					  key={elem.id}
					  title={elem.title}
					  description={elem.description}
					  date={elem.date}
					  deleter={() => deleter(elem.id)} />
			  })}
		  </div>}
		  {info.length === 0 && <h1>{We have no data 😓}</h1>}
	  </div>
  )
}

