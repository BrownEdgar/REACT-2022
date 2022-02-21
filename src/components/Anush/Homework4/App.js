import React, { useState } from 'react'
import "./App.scss"
import Trtd from "./Trtd"
import data from"./Data.json"


export default function App() {
    const[value, setValue]=useState(data)
    const deleter=(id)=>{
        let copy =[...value]
        copy=copy.filter(elem=> elem.id !== id)
        setValue(copy)
    }

  return (
    <div>
        <h1>Showing {value.length} movies in the database.</h1>
        <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
         </tr>
        {
        value.length ? value.map(elem=>{
                       return <Trtd
                        key={elem.id}
                        title={elem.title}
                        genre={elem.genre}
                        stock={elem.stock}
                        rate={elem.rate}
                        deleter={()=>{deleter(elem.id)}}
                        len={value.length}
                      />
        }): <h2>No movies yet</h2>
      }

        </table>
    </div>
  )
}
