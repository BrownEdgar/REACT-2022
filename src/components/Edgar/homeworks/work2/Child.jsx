import React from 'react'
import  s from './Child.module.css'
export default function Child(props) {
	console.log(props.children)
	return (
		<div className={s.box}>
		{props.children}
		<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore similique delectus saepe fuga. Laudantium, doloribus obcaecati, modi provident minus dolorem, placeat illum nam unde architecto itaque! Perferendis, totam expedita?</h1>
	</div>
  )
}
