import React, { useReducer, useState } from 'react'
import reducer from "./reducer"
import { TYPES } from "./types";

export default function App() {

	const [state, dispatch] = useReducer(reducer, { market: [{ id: 1, sku: 64856, category: 'office', price: 453000, city: 'germany', discount: '12 %' }, { id: 2, sku: 57865, category: 'office', price: 300000, city: 'england', discount: '15 %' }, { id: 3, sku: 62458, category: 'office', price: 500000, city: 'italy', discount: '20 %' }, { id: 4, sku: 74587, category: 'office', price: 700000, city: 'spain', discount: '30 %' }] });

	return (
		<div>
			<h1>{state.market.map(elem => JSON.stringify(elem, null, 1))}</h1>
			<button onClick={() => dispatch({ type: TYPES.SORT_DISCOUNT })}>by discount</button>
			<button onClick={() => dispatch({ type: TYPES.SORT_PRICE })}>by price</button>
			<button onClick={() => dispatch({ type: TYPES.FIND_DISCOUNT })}>the most discounted</button>
			<button onClick={() => dispatch({ type: TYPES.FIND_COUNTRY })}>by country</button>
			<button onClick={() => dispatch({ type: TYPES.FIND_CATEGORY })}>find by category</button>
			<button onClick={() => dispatch({ type: TYPES.SORT_ALPABET })}>by alphabet</button>

		</div>
	)
}
