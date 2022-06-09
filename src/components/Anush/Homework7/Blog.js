import React, {useState} from 'react'

export default function Blog() {
  const [array,setarray]=useState([12,13,14])//["Ձեր գովազդը կարող է լինել Kindda-ի էջում"])
  const dontRefresh = (e) => {
		e.preventDefault()
	}
  const giveAnswer=(e)=>{
    const v=e.target.value
    setarray(v)
   // const copy=array
   // setarray([...copy, v]) 
    console.log(v)
    e.preventDefault()

  }
  return (
    <div>
      <h1>{array}</h1>
      <form >
        <label>Պարզապես գրեք թե ինչքան եք պատրաստ վճարել</label>
        <input name ="amount" type="text" placeholder="Amount" /> 
        <button onClick={giveAnswer}>Add</button>
      </form>
    </div>
  )
}
