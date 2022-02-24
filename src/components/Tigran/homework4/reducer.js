import { TYPES } from "./types";

export default function reducer(state, action) {
	switch (action.type) {
		case TYPES.FIND_COUNTRY: return
		case TYPES.FIND_DISCOUNT: return findDiscount(state)
		case TYPES.SORT_DISCOUNT: return discount(state)
		case TYPES.SORT_PRICE: return price(state)
		case TYPES.FIND_CATEGORY: return
		case TYPES.SORT_ALPABET: return alpha(state)

		default: return state;

	}
}
function price(state) {

	return { market: state.market.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)) }
}
function discount(state) {

	return { market: state.market.sort((a, b) => parseFloat(a.discount) - parseFloat(b.discount)) }
}
function findDiscount(state) {
	return { market: Math.max(...state.market.map(item => item.discount)) };
}
// function findCategory(state) {
// 	return { market: };

function alpha(state) {
	return {
		market: state.market.sort(
			function (a, b) {
				if (a.city < b.city) {
					return -1;
				} else if (a.city > b.city) {
					return 1;
				} else {
					return 0;
				}
			}
		)
	}
}
