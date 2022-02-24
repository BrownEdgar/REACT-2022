import React, { useState } from 'react'
import Box from './Box'
export const Zangvac = React.createContext({ data: [1, 2, 3, 4, 5, 6]})
export default function App() {

	const [data, setdata] = useState([1,2,3])

  return (
	<div>

			<Box/>

	
	</div>
  )
}


