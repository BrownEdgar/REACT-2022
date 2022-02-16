import React from 'react'

const Table = ({movie,handleDeleteClick}) => {
	return (
		<tr>
			<td>{movie.Title}</td>
			<td>{movie.Genre}</td>
			<td>{movie.Stock}</td>
			<td>{movie.Rate}</td>
			<td>
				<button onClick={()=>handleDeleteClick(movie)}>delete</button>
			</td>
		</tr>
	)
}

export default Table