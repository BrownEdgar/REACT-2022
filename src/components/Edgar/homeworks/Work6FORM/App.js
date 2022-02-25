import React, {useState} from 'react'
import "./App.scss"
export default function App() {
	const [forms, setforms] = useState({
		email:"",
		password: {
			value:"", 
			errorMessage: "Passwor is Invalid",
			validatation: {
				minLength: 8,
				hasNumber: true
			}
		}
	})
	const handlerChange = (e) => { 
		const {value, name } = e.target
		const isValid = validate(value, name) //true false
		console.log(isValid)
		if (isValid) {
			setforms({ ...forms, [name]: value})
		}else{

		}
		
	}
	const validate = (value, name) => { 
		let isValid = true;
		if (!forms[name].validatation) {
			return isValid
		}
		if (forms[name].validatation.minLength) {
			isValid = value.length >= forms[name].validatation.minLength && isValid
		}
		if (forms[name].validatation.hasNumber) {
			isValid = !!value.match(/\d/g) && isValid
		}

		return isValid
	 }

	const handlerSubmit = (e) => {
		e.preventDefault()
	}
  return (
	<div>
		<form onSubmit={handlerSubmit}>
			<input type="text" name="email" onChange={handlerChange}/>
			  <input type="password" name="password" onChange={handlerChange}/>
			<input type="submit" value="send"/>
		</form>
	</div>
  )
}
