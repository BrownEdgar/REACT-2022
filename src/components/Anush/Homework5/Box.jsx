import React,{useContext} from 'react'
import {UserContext} from './App'
export default function Box() {
    
  return (
    <div className='box2'>

               <UserContext.Consumer>
               {(value) => {
                   return  <h2>{JSON.stringify(value.data)}</h2>

               }}

            </UserContext.Consumer>

    </div>
  )
}