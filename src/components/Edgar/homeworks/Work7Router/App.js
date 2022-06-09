import React, { useState } from 'react';
import NavBar from './NavBar'
import "./App.scss"
import Home from './Home'
import About from './About'
import Blog from './Blog'
import { Routes,Route } from 'react-router-dom';

export default function App(props) {
	const [first, setfirst] = useState("Home page")
  return (
	<div>
		<NavBar/>
		  <Routes>
			  <Route path='/' element={<Home pageTitle={first}/>}/>
			  <Route path='/about' element={<About />}/>
			  <Route path='/blog/:id' element={<Blog />}/>
			  <Route path="*" element={ </> } />
		  </Routes>
		
	</div>
  )
}
