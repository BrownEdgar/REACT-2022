import React, { useState } from 'react';
import Table from "./Table";
import data from "./data.json"

import "./App.scss";

export default function App() {

	const [info, setInfo] = useState(data)

	const handleDeleteClick = (elemId) => {
		const newInfo = [...info];
		const index = info.findIndex((elem) => elem.id === elemId);
		newInfo.splice(index, 1);
		setInfo(newInfo)
	}
	return (
		<div className='main'>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					{info.map((movie) => (
						<Table movie={movie} key={movie.id} handleDeleteClick={handleDeleteClick} />
					))}

				</tbody>
			</table>
		</div>
	)
}
