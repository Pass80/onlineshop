export const initialState = {
	basket: [
		{
			id: "1233",
			title: "Ipad Pro 2021",
			image: "https://med.csmobiles.com/275499-large_default/apple-ipad-pro-12-9-2021-5g-128gb-gris.jpg",
			description:
				"the new Apple Tablet that comes with the fastest processor ever built M1 chip",
			price: 1070,
			rating: 5,
		},
		{
			id: "1233",
			title: "Ipad Pro 2021",
			image: "https://med.csmobiles.com/275499-large_default/apple-ipad-pro-12-9-2021-5g-128gb-gris.jpg",
			description:
				"the new Apple Tablet that comes with the fastest processor ever built M1 chip",
			price: 1070,
			rating: 5,
		},
	],
};
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return { ...state, basket: [...state.basket, action.item] };
			break;
		case "REMOVE_FROM_BASKET":
			let newBasket = [...state.basket];

			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product(id: ${action.id}) as it is not exist`
				);
			}
			return { ...state, basket: newBasket };
			break;
		default:
			return state;
	}
};

export default reducer;
