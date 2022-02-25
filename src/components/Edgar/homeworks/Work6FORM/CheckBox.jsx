import React, { useState } from 'react'

export default function CheckBox() {
	const [selectvalue, setselectvalue] = useState(false)

	const handlerChange = (e) => {
		console.log('e.target.value', e.target.checked);
		setselectvalue(e.target.checked)
	}
  return (
	<div>
		  <h1>{selectvalue}</h1>
		<form >
			  <input type="checkbox" onChange={handlerChange}/>
		</form>


	</div>
  )
}
