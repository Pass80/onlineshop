import React from "react";
import { useStateValue } from "../state-provider/StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ Basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutproduct">
			<img className="checkoutproduct__image" src={image} alt="image" />
			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{title}</p>
				<p className="checkoutproduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutproduct__rating">
					{Array(rating)
						.fill()
						.map((item) => (
							<p>*</p>
						))}
				</div>
				<button onClick={removeFromBasket}>
					Remove from the Basket
				</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
