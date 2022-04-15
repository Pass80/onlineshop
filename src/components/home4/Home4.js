import React from "react";
import "./Home.css";
import Product from "../product/Product";

const Home = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="banner"
			/>
			<div className="home__row">
				<Product
					id="1233"
					title="Ipad Pro 2021"
					image="https://med.csmobiles.com/275499-large_default/apple-ipad-pro-12-9-2021-5g-128gb-gris.jpg"
					description="the new Apple Tablet that comes with the fastest processor ever built M1 chip"
					price={1070}
					rating={5}
				/>
				<Product
					id="123"
					title="samsung"
					image="https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/samsung_galaxy_s7_edge_2.jpg"
					description="a smart phone that has a powerful processor"
					price={23}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="123"
					title="Alexa"
					image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430060cv13d.jpg"
					description="a smart phone that has a powerful processor"
					price={23}
					rating={4}
				/>
				<Product
					id="123"
					title="LG wide screen"
					image="https://media.cdn.kaufland.de/product-images/1024x1024/186fb2cf6ff29f5df3defe4634ad2ef7.jpg"
					description="a smart phone that has a powerful processor"
					price={23}
					rating={3}
				/>
				<Product
					id="123"
					title="Amd processor 5th generation"
					image="https://i.otto.de/i/otto/8d468dfc-5f4c-5b04-be55-0697a5c06748/amd-prozessor-ryzen-9-5950x.jpg?$formatz$"
					description="a smart phone that has a powerful processor"
					price={23}
					rating={5}
				/>
			</div>
		</div>
	);
};

export default Home;
