import React from 'react'

export default function ShowArray(props) {
  return (
    <div>
        {props.data.map((elem,index)=>{
            return <p key={index}>{elem}</p>
          })
          }
    </div>
  )
}
