

import Buuton from './components/button/Button';
import { useState } from "react"
import './App.css';

function App() {
	const [value, setValue] = useState(1)

	const plus = () => {
		setValue(value + 1)
	}

  return (
    <div className="App">
		  <h1>Count {value}</h1>
		  <Buuton name="Read more" plus={plus}/>
		  <Buuton type="dark"/>
		
			
    </div>
  );
}

export default App;
