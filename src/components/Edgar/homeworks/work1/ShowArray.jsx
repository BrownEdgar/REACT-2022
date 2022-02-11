

function ShowArray(props) {

	return (
		<div>
			{props.data.map((elem,index) => {
				return <p key={index}>{elem}</p>
			})}
			<button onClick={() => props.addHandler(2)}>add</button>
		</div>
	);
}

export default ShowArray;