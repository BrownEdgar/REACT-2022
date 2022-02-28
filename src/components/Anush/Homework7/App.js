import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Blog from './Blog'
import Home from './Home'
import "./App.scss"
import {Routes, Route} from "react-router-dom"
import Login from './Login'

export default function App(props) {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}
