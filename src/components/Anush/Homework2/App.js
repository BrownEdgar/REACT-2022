import React,{useState} from 'react'
import data from"./Data.json"
import  "./App.css"
import Div from "./Div"
import NoDiv from './NoDiv'

export default function App() {
    const[value, setValue]=useState(data)
  // const[noValue, setNoValue]=useState(1])

    const deleter=(id)=>{
        let copy=[...value];
   //     let copy1=["nkjvkfrdkfjmkd"];
        copy = copy.filter(elem => elem.id !== id)
      // copy.length==0 ? 
     setValue(copy)
      console.log(copy)
      //<h1>["No content"]</h1>
  copy.length!==-1 ? setValue(copy): <NoDiv/>

    }

  return (
        <div className='main'>
           <div className="box1" id='box2'>
              <h1>KJJKKLLKK</h1>
            </div>
        <div className='container'>

        {value.map(elem=>{
            return <Div
                        key={elem.id}
                        title={elem.title}
                        description={elem.description}
                        deleter={()=>deleter(elem.id)}/>
        })}

        </div>
    </div>
  )
}
