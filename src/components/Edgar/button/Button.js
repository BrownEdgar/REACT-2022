
import "./Button.css"

function Button(props) {
	console.log(props);
	return <button 
	onClick={props.plus}
	className={`${props.type ? props.type : ""}`}>{props.name ? props.name : "Default"}</button>
}

export default Button