import React, { useState } from 'react';
import Table from "./Table";
import data from "./data.json"

import "./App.scss";

export default function App() {
	const [info,setInfo] = useState(data)
	const handleDeleteClick = (movieId)=>{
		const newInfo = [...info];
		const index = info.findIndex((movie)=> movie.id === movieId);
		newInfo.splice(index,1);
		setInfo(newInfo)
	}
	return (
		<div className='main'>
<<<<<<< HEAD
		<table className='myTable'>
				<caption>Showing 5 movies in the database</caption>
=======
			<table className='myTable'>
				<caption>Showing {info.length} movies in the database</caption>
>>>>>>> f4698af475983b1b01b159748973a1857c48fdd8
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
						<th></th>

					</tr>
				</thead>
				<tbody>
					{
						info.length ? (
							
								info.map((movie) => (
									<Table movie={movie} key={movie.id} handleDeleteClick={handleDeleteClick} />
								))
							
						)
						: <tr>
							<td>no data</td>
						</tr> 
					}

				</tbody>
			</table>
		</div>
	)
}
