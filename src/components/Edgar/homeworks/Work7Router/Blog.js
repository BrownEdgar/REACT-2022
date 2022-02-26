import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
	const { id  } = useParams()
  return (
	<div>
		  <h1>Blog page N {id}</h1>
	</div>
  )
}
