import React, {useState,useEffect} from 'react'
import  axios from 'axios'
import Box from './Box'

function App() {
	const  [data, setdata] =  useState([])



	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/todos')
			.then(response => setdata(response.data))
	}, [  ])



  return (
	<div>
		 {data.map(elem => {
			 return (
				 <p key={elem.id}>{elem.title}</p>
			 )
		 })}
	</div>
  )
}

export default App