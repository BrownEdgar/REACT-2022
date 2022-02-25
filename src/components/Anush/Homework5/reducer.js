export default function reducer(state,action){
  
    switch(action.type){
		case "sort": return discount(state, "discount");
		case "price": return discount(state, "price");
		case "sale": return mostdiscount(state, "discount");
		case "country": return country(state, action.payload);
		default: return state 
    }
}

function discount(state, field) {
	let filtered = [...state.data]
	filtered = filtered.sort((a, b) => parseInt(b[field]) - parseInt(a[field]))

	return { ...state, data: filtered}
}
function mostdiscount(state, field) {
	let filtered = [...state.data]
	filtered = filtered.sort((a, b) => parseInt(b[field]) - parseInt(a[field]))[0]

	 return { ...state, mostDiscount: filtered }
}

function country(state,ctr) {
	let filtered = [...state.data]
	filtered = filtered.filter(elem => elem.country === ctr)
	return { ...state, data: filtered }
}
