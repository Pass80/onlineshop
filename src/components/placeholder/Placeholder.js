import React from "react";
import "./Placeholder.css";

const Placeholder = () => {
	return (
		<div className="card">
			<div className="card-content">
				<h3
					className="card-title animated-bg animated-bg-text"
					id="title"
				></h3>
				<p className="product__price animated-bg">
					<strong>&nbsp;</strong>
					<small>&nbsp;</small>
				</p>
				<div className="product__rating"></div>

				<p className="card-description" id="description">
					&nbsp;
					<span className="animated-bg animated-bg-text">&nbsp;</span>
					<span className="animated-bg animated-bg-text">&nbsp;</span>
					<span className="animated-bg animated-bg-text">&nbsp;</span>
				</p>
			</div>
			<div className="card-header animated-bg"></div>
			<div className="add-button animated-bg">
				<p className="button-placeholder"></p>
			</div>
		</div>
	);
};

export default Placeholder;
