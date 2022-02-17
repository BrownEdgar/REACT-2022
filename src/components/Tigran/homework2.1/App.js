import React, { useState } from 'react'
import MyCars from "./MyCars";
import cars from "./cars.json";
import "./App.scss";




export default function App() {
	const [carInfo, setCarInfo] = useState(cars)

	return (
		<div className='main'>
			<fieldset>
				<legend>Cars in Stock</legend>
				<div className='container'>
					{carInfo.map(elem => {
						return <MyCars
							key={elem.id}
							pic={elem.pic}
							model={elem.Model}
							price={elem.price}
						/>
					})}
				</div>
			</fieldset>
		</div>
	)
}
