import { TYPES } from "./types";

export default function reducer(state,action){
	switch (action.type) {
		case TYPES.DECREMENT: return dec(state)
		case TYPES.INCREMENT:return { count: state.count + 1 }
		case TYPES.RESET:return { count: 0 }
	
		default:  return state;
		
	}
}
function dec(state) {

	return { count: state.count - 1 }
}