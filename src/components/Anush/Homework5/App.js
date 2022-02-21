import axios from "axios"
import React, {useState, useEffect, createContext, useContext} from 'react';
import Div from "./Div";
import Box from "./Box";
import "./style/App.scss";
export const UserContext=React.createContext();



export default function App() {
   const[name,setName]=React.useState(null)
   useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then((response)=>{setName(response.data.title)
     })
   },[ ])
  return (
    <div>
       <h1>Sun please</h1> 
       <UserContext.Provider value={{
         data:name
       }}>
         <Div/>
       </UserContext.Provider>
    </div>
  )
}
