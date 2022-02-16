import React, {useState} from 'react';
import   "./App.scss";
import Child from './Child';

export default function App() {
	
  return (
	<div>
		<div className='box'>
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p className="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga libero sequi eveniet dignissimos recusandae ratione repellat voluptates veritatis soluta ab omnis repellendus, voluptatibus, nihil deserunt perspiciatis debitis nostrum harum.</p>
				<p className="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur explicabo, nesciunt distinctio minima nobis iure magni, adipisci repellendus maiores minus dolorem quam id temporibus! Animi laborum nobis consequatur aliquid!</p>
				<button>Read more</button>
		</div>




		  <Child >
			  <h1>Lorem, ipsum dolor.</h1>
			  <p>Lorem ipsum dolor sit amet.</p>
			  <p>Lorem ipsum dolor sit amet.</p>
			  <p>Lorem ipsum dolor sit amet.</p>
			  <button>read</button>
		  </Child>
		  <Child>
			  <h1>Lorem, ipsum dolor.</h1>
			 
		  </Child>
		

	</div>
  )
}
