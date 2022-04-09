import React from "react";
import { useStateValue } from "../state-provider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div>
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="image"
				/>
				{basket?.length === 0 ? (
					<p>You dont have any items in the Basket</p>
				) : (
					<div>
						<p>` You have ${basket.length} items in your cart `</p>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			<div>
				{basket.length > 0 && (
					<div className="checkout__right">
						<Subtotal />
					</div>
				)}
			</div>
		</div>
	);
};

export default Checkout;
