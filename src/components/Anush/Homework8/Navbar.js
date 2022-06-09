import React from 'react'
import {Link} from "react-router-dom"
import nkar from "./images/kinda.png"

export default function NavBar() {
  return (
    <header>
      <img src={nkar}/>
        <ul>
           <div className='justdiv' >
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
