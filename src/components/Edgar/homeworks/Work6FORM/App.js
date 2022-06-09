import React, {useState} from 'react'
import "./App.scss"

//email validation RegExp
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default function App() {
	const [forms, setforms] = useState({
		email: {
			value: "",
			errorMessage: "",
			validatation: {
				email:true
			}
		},
		password: {
			value:"", 
			errorMessage: "",
			validatation: {
				minLength: 8,
				hasNumber: true
			}
		}
	})
	const handlerChange = (e) => { 
		const {value, name } = e.target;
		const copy = forms[name]
		const isValid = validate(value, name) //true false
		if (isValid) {
			copy.value = value
			copy.errorMessage = ""
			setforms({ ...forms, [name]: copy})
		}else{
			//error
			copy.errorMessage = "invalid password";
			if(value.length === 0) {
				copy.errorMessage = "";
			} 
			setforms({ ...forms, [name]:copy})
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
		if (forms[name].validatation.email) {
			isValid = validateEmail(value) && isValid
		}
		return isValid
	 }

	const handlerSubmit = (e) => {
		e.preventDefault()
	}
  return (

	<div className='main'>
		<form onSubmit={handlerSubmit}>
			<div>
				  <input type="text" name="email" onChange={handlerChange} />
				  {forms.email.errorMessage && <p className='error'>{forms.email.errorMessage}</p>}
			</div>
			<div>
				  <input type="password" name="password" onChange={handlerChange} />
				  {forms.password.errorMessage && <p className='error'>{forms.password.errorMessage}</p>}
			</div>
			<input type="submit" value="send"/>
		</form>
	</div>
  )
}
