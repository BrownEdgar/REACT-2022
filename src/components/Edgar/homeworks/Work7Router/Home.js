import React from 'react'

export default function Home(props) {
	console.log(props);
  return (
	<div>
		  <h1>{props.pageTitle}</h1>
	</div>
  )
}
