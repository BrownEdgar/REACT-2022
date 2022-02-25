import React,{useContext, useReducer} from 'react'
import Box from "./Box"
import data from "./Data.json"
import reducer from "./reducer"



export default function Div() {
  const [state,dispatch]=useReducer(reducer, {data, mostDiscount: null, mostExpensive: null})

  return (
    <div>
         <div className='box'>
           <Box/>
            <button onClick={()=>dispatch({type:"sort"})}>սորտավորել ըստ զեղչի</button>
             <button onClick={()=>dispatch({type:"price"})}> սորտավորել ըստ գնի</button>
             <button onClick={()=>dispatch({type:"sale"})}>գտնել ամենազեխչված ապրանքը</button>
			  <button onClick={() => dispatch({ type: "country", payload: "germany"})}>գտնել բոլոր ապրանքները ըստ արտադրման երկրի</button>
             <button onClick={()=>dispatch({type:"catogory"})}>գտնել բոլոր ապրանքները ըստ կատեգորյաի</button>
             <button onClick={()=>dispatch({type:"A-Z"})}>սորտավորել այբենական կարգով</button>
			  <pre>{JSON.stringify(state,null,1)}</pre>
			  {state.mostDiscount && <pre className='position'>
				  state.mostDiscount:
				  {JSON.stringify(state.mostDiscount, null, 1)}</pre>}
               </div>
    </div>
  )
}
