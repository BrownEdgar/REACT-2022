import React, {useState} from 'react';
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
			<table className='myTable'>
				<caption>Showing 5 movies in the database</caption>
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
					{info.map((movie)=>(
						<Table movie={movie} key={movie.id} handleDeleteClick={handleDeleteClick}/>
					))}
					
				</tbody>
			</table>
		</div>
	)
}