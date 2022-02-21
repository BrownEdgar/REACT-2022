import React from 'react'

function MyCars(props) {
	return (
		<div className="block">
			<img src={props.pic} alt="cars" />
			<div className='block_text'>
				<h1>{props.model}</h1>
				<p>{props.price}</p>
			</div>
		</div>
	)
}

export default MyCars