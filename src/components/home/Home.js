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
					id="1"
					title="Ipad Pro 2021"
					image="https://cdn.idealo.com/folder/Product/201225/1/201225170/s1_produktbild_max/apple-ipad-pro-11-128gb-wifi-spacegrau-2021.jpg"
					description="Das 11 Liquid Retina Display ist nicht nur brillant und mobil es hat auch fortschrittliche Technologien wie ProMotion was es so reaktionsschnell"
					price={1070}
					rating={5}
				/>
				<Product
					id="2"
					title="Ipad Air 2022"
					image="https://cdn.idealo.com/folder/Product/201861/0/201861084/s1_produktbild_max/apple-ipad-air-64gb-wifi-grau-2022.jpg"
					description="Liquid Retina Display 10,9 Multi-Touch Display 27,69 cm Diagonale mit LED Hintergrund-Beleuchtung und IPS Technologie
                                 Auflösung von 2360 x 1640 Pixeln bei 264 ppi Display mit großem Farbraum"
					price={800}
					rating={4}
				/>
				<Product
					id="3"
					title="Ipad Pro 2020"
					image="https://cdn.idealo.com/folder/Product/200174/2/200174293/s1_produktbild_max/apple-ipad-pro-11-1tb-wifi-silber-2020.jpg"
					description="Liquid Retina Display 10,9 Multi-Touch Display 27,69 cm Diagonale mit LED Hintergrund-Beleuchtung "
					price={799}
					rating={4}
				/>
				<Product
					id="4"
					title="Ipad Air 2020"
					image="https://cdn.idealo.com/folder/Product/200653/7/200653757/s1_produktbild_max/apple-ipad-air-64gb-wifi-gruen-2020.jpg"
					description="Liquid Retina Display 10,9 Multi-Touch Display 27,69 cm Diagonale mit LED Hintergrund-Beleuchtung und IPS Technologie
                                 Auflösung von 2360 x 1640 Pixeln bei 264 ppi Display mit großem Farbraum P3 True Tone Display"
					price={899}
					rating={5}
				/>
			</div>
			<div className="home__row">
				<Product
					id="5"
					title="Apple iMac 24 M1"
					image="https://cdn.idealo.com/folder/Product/201231/8/201231819/s1_produktbild_max/apple-imac-24-m1-2021-mjv83d-a-gruen.jpg"
					description="Der Mac ist leistungs­stark, vielseitig und kommt mit allem, was du brauchst, um deine Arbeit auf das nächste Level zu bringen. Werde produktiver und kreativer mit Apps für so ziemlich alles, was du dir vorstellen kannst"
					price={1200}
					rating={4}
				/>
				<Product
					id="6"
					title="Apple iMac 27 Retina 5K"
					image="https://cdn.idealo.com/folder/Product/200518/0/200518028/s1_produktbild_max/apple-imac-27-retina-5k-display-2020-mxwu2d-a.jpg"
					description="Intel All in One PC  Intel Core i5-10600  AMD Radeon Pro 5300  27 Zoll  Bildschirmauflösungen 5k  8 GB RAM  Apple Mac OS X 10.15 Catalina  SSD Festplatte  512 GB SSD-Speicher "
					price={1230}
					rating={3}
				/>
				<Product
					id="7"
					title="Apple iMac 21,5 Retina 4K "
					image="https://cdn.idealo.com/folder/Product/200518/8/200518819/s1_produktbild_max/apple-imac-21-5-retina-4k-display-mhk33d-a.jpg"
					description="Intel All in One PC  Intel Core i5-8500  AMD Radeon Pro 560X  21,5 Zoll  Bildschirmauflösungen 4k  8 GB RAM  Apple Mac OS X 10.15 Catalina  SSD Festplatte  256 GB SSD-Speicher "
					price={1500}
					rating={3}
				/>
				<Product
					id="8"
					title="Apple iMac 21,5"
					image="https://cdn.idealo.com/folder/Product/200518/7/200518724/s1_produktbild_max/apple-imac-21-5-2020-mhk03d-a.jpg"
					description="Intel All in One PC  Intel Core i5-7360U  Intel Iris Plus Graphics 640  21,5 Zoll  Bildschirmauflösungen Full HD  8 GB RAM  Apple Mac OS X 10.15 Catalina  SSD Festplatte  256 GB SSD-Speicher "
					price={1800}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="9"
					title="Apple MacBook Pro 14"
					image="https://cdn.idealo.com/folder/Product/201636/3/201636356/s1_produktbild_max/apple-macbook-pro-14-2021-m1-pro-8-core-space-grau-mkgp3d-a.jpg"
					description="Das neue MacBookPro liefert bahnbrechende Performance für Pros. Wähle den leistungsstarken M1Pro oder den M1Max mit noch mehr Power."
					price={2010}
					rating={5}
				/>
				<Product
					id="10"
					title="Apple MacBook Pro 13"
					image="https://cdn.idealo.com/folder/Product/200840/9/200840936/s1_produktbild_max/apple-macbook-pro-13-2020-m1-myd92d-a.jpg"
					description="Liquid Retina Display 10,9 Multi-Touch Display 27,69 cm Diagonale mit LED Hintergrund-Beleuchtung und IPS Technologie
                                 Auflösung von 2360 x 1640 Pixeln bei 264 ppi Display"
					price={800}
					rating={4}
				/>
				<Product
					id="11"
					title="Apple MacBook Pro 13"
					image="https://cdn.idealo.com/folder/Product/200178/1/200178165/s1_produktbild_max/apple-macbook-air-13-2020-mwtj2d-a.jpg"
					description="Apple MacBook Pro M1 133 Touch Bar Apple M1 32GHz 8GB RAM 512GB SSD Apple 8 Core macOS spacegrau 2020 Neu differenzbesteuert"
					price={1799}
					rating={4}
				/>
				<Product
					id="12"
					title="Apple MacBook Air 13"
					image="https://cdn.idealo.com/folder/Product/200840/8/200840890/s1_produktbild_max/apple-macbook-air-13-2020-m1-mgnd3d-a.jpg"
					description="Liquid Retina Display 10,9 Multi-Touch Display 27,69 cm Diagonale mit LED Hintergrund-Beleuchtung und IPS Technologie
                                 Auflösung von 2360 x 1640 Pixeln bei 264 ppi Display mit großem Farbraum P3 True Tone Display"
					price={1899}
					rating={5}
				/>
			</div>
		</div>
	);
};

export default Home;
