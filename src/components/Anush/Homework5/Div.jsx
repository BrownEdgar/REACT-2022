import React,{useContext, useReducer, useState} from 'react'
import Box from "./Box"
import data from "./Data.json"
import reducer from "./reducer"



export default function Div() {
  const [select,setSelect]=useState("")
  const [state,dispatch]=useReducer(reducer,data)
  const change=(e)=>{
    setSelect(e.target.value)
  }
  return (
    <div>
         <div className='box'>
           <Box/>
            <select onChange={()=>dispatch({type:"e.target.value"})} >
              <option value="discount">սորտավորել ըստ զեղչի</option>
              <option value="price">սորտավորել ըստ գնի</option>
              <option value="mostDiscount">գտնել ամենազեխչված ապրանքը</option>
              <option value="country">գտնել բոլոր ապրանքները ըստ արտադրման երկրի</option>
              <option value="catogry">գտնել բոլոր ապրանքները ըստ կատեգորյաի</option>
              <option value="alfabet">սորտավորել այբենական կարգով</option>
            </select>
             <p>{JSON.stringify(state)}</p>
               </div>
    </div>
  )
}
