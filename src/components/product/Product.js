import React from "react";
import { useStateValue } from "../state-provider/StateProvider";
import "./Product.css";

const Product = ({ id, title, description, price, rating, image }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addItemToCart = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((item) => (
							<p>*</p>
						))}
				</div>
				<p>{description}</p>
			</div>

			<img src={image} alt="image" />
			<button onClick={addItemToCart}>Add to Basket</button>
		</div>
	);
};

export default Product;
