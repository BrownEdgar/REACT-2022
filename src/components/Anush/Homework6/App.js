import React, {useReducer}from 'react'
import data from "./Data.json"
import reducer from "./reducer"


export default function App() {
    const [state, Dispatch] = useReducer(reducer,data);

  return (
    <div className="App">
        <select>
    <option value="discount" onChange={(e) => Dispatch(e.target.value)}>սորտավորել ըստ զեղչի</option>
    <option value="price"> սորտավորել ըստ գնի</option>
    <option value="most discounted">գտնել ամենազեխչված ապրանքը</option>
    <option value="city">գտնել բոլոր ապրանքները ըստ արտադրման երկրի</option>
    <option value="category">գտնել բոլոր ապրանքները ըստ կատեգորյաի</option>
    <option value="Alfabet">սորտավորել այբենական կարգով</option>
    </select>,
      {state.map(data => (
        <div key={data.id} style={{ margin: '30px' }}>
          <div>{`Sku: ${data.sku}`}</div>
          <div>{`Category: ${data.category}`}</div>
          <div>{`Price: ${data.price}`}</div>
          <div>{`City: ${data.city}`}</div>
          <div>{`Discount: ${data.discount}`}</div>

        </div>
      ))}
    </div>
  )
}
