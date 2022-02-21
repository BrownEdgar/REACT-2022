import React,{useContext, useReducer} from 'react'
import Box from "./Box"
import data from "./Data"
import reducer from "./reducer"



export default function Div() {
  const [state,dispatch]=useReducer(reducer,data)

  return (
    <div>
         <div className='box'>
           <Box/>
            <button onClick={()=>dispatch({type:"sort"})}>սորտավորել ըստ զեղչի</button>
             <button onClick={()=>dispatch({type:"price"})}> սորտավորել ըստ գնի</button>
             <button onClick={()=>dispatch({type:"sale"})}>գտնել ամենազեխչված ապրանքը</button>
             <button onClick={()=>dispatch({type:"country"})}>գտնել բոլոր ապրանքները ըստ արտադրման երկրի</button>
             <button onClick={()=>dispatch({type:"catogory"})}>գտնել բոլոր ապրանքները ըստ կատեգորյաի</button>
             <button onClick={()=>dispatch({type:"sort"})}>սորտավորել այբենական կարգով</button>
             {data.map((elem,index)=>{
            return <p key={index}>{JSON.stringify(elem)}</p>
          })
          }
               </div>
    </div>
  )
}
