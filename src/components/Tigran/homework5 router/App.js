import React, { useState } from 'react';
import NavBar from './NavBar'
import "./App.scss"
import Home from './Home'
import About from './About'
import Form_page from './Form_page'
import { Routes,Route } from 'react-router-dom';

export default function App(props) {
	const [first, setfirst] = useState("Home page")
  return (
	<div >
		<NavBar/>
		  <Routes>
			  <Route path='/' element={<Home pageTitle={first}/>}/>
			  <Route path='/about' element={<About />}/>
			  <Route path='/form_page' element={<Form_page />}/>
		  </Routes>
	</div>
  )
}
