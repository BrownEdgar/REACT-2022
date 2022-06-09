import React from 'react'
import Comp1 from "./Comp1";
export const Func = React.createContext({metod: [1,2,3]});
export default function App() {
	return (
		<div>
			
				<Comp1 />

		</div>
	)
}
