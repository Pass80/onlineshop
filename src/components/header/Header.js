import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../state-provider/StateProvider";
const Header = () => {
	const [{ basket }] = useStateValue();
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="logo"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Hello</span>
						<span className="header__optionLineTwo">sign In</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& order</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__optionBasket">
						<ShoppingCart className="cart__icon" />
						<span className="cart__items">{basket?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
