import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
	  <header>
		  <ul>
			  <li><Link to="/">Home</Link></li>
			  <li><Link to="/form_page">Form page</Link></li>
			  <li><Link to="/about">About</Link></li>
		  </ul>
	  </header>
  )
}
