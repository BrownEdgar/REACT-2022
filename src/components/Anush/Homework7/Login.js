import React, {useState} from 'react'
import "./App.scss"

export default function Login() {

    const[form, setform]=useState({
        email:"",
        password:{
            value:"",
            errorMessage:"Password is Invaid",
            validation:{
                minLength: 8,
                hasNumber: true
            }
        }
    })

    const dontRefresh=(e)=>{
        e.preventDefault()
    }

    const saveValue=(e)=>{
        const{value,name}=e.target
        const isValid=validate(value,name)
        console.log(isValid)
        if(isValid){
        setform({...form,[name]:value})
    }else{}
    }
    
    const validate=(value,name)=>{
        let isValid=true
        if(!form[name].validation){
            return isValid
        }
        if(form[name].validation.minLength){
            isValid=value.length>=form[name].validation.minLength
        }
        if(form[name].validation.hasNumber){
            isValid= !!value.match(/\d/g) 
        }
        return isValid
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
}
