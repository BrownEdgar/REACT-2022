import React, {useState} from 'react'
export default function Blog() {
const [forms, setforms]=useState({email:"", password:""})

const dontRefresh = (e) => {
		e.preventDefault()
	}

const saveValue=(e)=>{
	const {value, name}=e.target
	const copy=forms[name]
	setforms({ ...forms,[name]:value})
	console.log(forms)
}

return (		
      <div className='login'>
		  <form onSubmit={dontRefresh}>
			  <input type="email" name="email" placeholder='Email' onChange={saveValue}/>
			  <input type="password" name="password" placeholder='Password' onChange={saveValue}/>
			  <input id="submit" type='submit' value="Log In"/>
		  </form>
	  </div>
    )
  }

//email validation RegExp
/*function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default function Login() {
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
	const saveValue = (e) => { 
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

	const dontRefresh = (e) => {
		e.preventDefault()
	}

  return (
    <div className='login'>
        <form onSubmit={dontRefresh}>
            <input type="text" name="email" onChange={saveValue}/>
            <input type="password" name="passwsord" onChange={saveValue}/>
            <input id="submit" type="submit" value="send"/>
        </form>
    </div>
  )
}*/
