import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <header>
        <ul>
           <div>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
           </div> 
           <div>
            <li><Link to="/login">Login</Link></li>
            </div>
        </ul>
    </header>
  )
}
