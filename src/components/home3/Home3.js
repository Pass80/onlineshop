import React from "react";
import "./Home3.css";
import Product from "../product/Product";

const Home3 = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="banner"
			/>
			<div className="home__row">
				<Product
					id="37"
					title="LG OLEDC17LB"
					image="https://cdn.idealo.com/folder/Product/201193/8/201193820/s1_produktbild_max/lg-oled55c17lb.jpg"
					description="4K-Fernseher  HDR  3.840 x 2.160 Pixel  WebOS 6.0  4 HDMI-Eingänge  Time Shift"
					price={2070}
					rating={5}
				/>
				<Product
					id="38"
					title="LG UP80009LA"
					image="https://cdn.idealo.com/folder/Product/201284/0/201284064/s1_produktbild_max/lg-55up80009la.jpg"
					description="4K-Fernseher  LED  3.840 x 2.160 Pixel  WebOS 6.0 "
					price={2223}
					rating={4}
				/>
				<Product
					id="39"
					title="LG OLED C27LA"
					image="https://cdn.idealo.com/folder/Product/201869/0/201869072/s1_produktbild_max/lg-oled55c27la.jpg"
					description="4K-Fernseher  OLED  3.840 x 2.160 Pixel  WebOS 22  4 HDMI-Eingänge"
					price={1360}
					rating={3}
				/>
				<Product
					id="40"
					title="LG NANO869PA"
					image="https://cdn.idealo.com/folder/Product/201218/3/201218394/s1_produktbild_max/lg-50nano869pa.jpg"
					description="4K-Fernseher  LED  3.840 x 2.160 Pixel  WebOS 6.0  4 HDMI-Eingänge  DE-Modell  Time Shift "
					price={1700}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="41"
					title="LG Gram 17"
					image="https://cdn.idealo.com/folder/Product/200433/4/200433477/s1_produktbild_max/lg-gram-17-17z90n-va-p55g.jpg"
					description="Multimedia Notebook  17,3 Zoll  Intel Core i5-1035G7  8 GB RAM  512 GB SSD-Speicher  Intel Iris Plus Graphics  Windows 10 Professional  Akkulaufzeit 17 h  1,4 kg"
					price={700}
					rating={3}
				/>
				<Product
					id="42"
					title="LG wide screen"
					image="https://cdn.idealo.com/folder/Product/201710/2/201710202/s1_produktbild_max/lg-gram-16-16z90p-g-ad89b.jpg"
					description="a smart phone that has a powerful processor"
					price={23}
					rating={3}
				/>
				<Product
					id="43"
					title="LG Gram 15 "
					image="https://cdn.idealo.com/folder/Product/201880/1/201880195/s1_produktbild_max/lg-gram-17-17z90p-g-aa75f.jpg"
					description="Multimedia Notebook  15,6 Zoll  Full HD  Intel Core i5-1135G7  16 GB RAM  512 GB SSD-Speicher  Intel Iris Xe Graphics  Windows 10 Professional  Akkulaufzeit 18 h  1,12 kg"
					price={1223}
					rating={4}
				/>
				<Product
					id="44"
					title="LG Gram 16"
					image="https://cdn.idealo.com/folder/Product/201704/1/201704195/s1_produktbild_max/lg-gram-16z90p-g-ap75d.jpg"
					description="Multimedia Notebook  16 Zoll  WQXGA  Intel Core i7-1165G7  16 GB RAM  512 GB SSD-Speicher  Intel Iris Xe Graphics  Windows 10 Professional  1,19 kg "
					price={1799}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="45"
					title="LG F4WV709P2BA"
					image="https://cdn.idealo.com/folder/Product/201826/5/201826545/s1_produktbild_max/lg-f4wv709p2ba.jpg"
					description="Frontlader  9 kg  1.360 U/Min  WLAN (Wi-Fi)  Startzeitvorwahl  Breite 60 cm  Tiefe 56 cm"
					price={566}
					rating={4}
				/>
				<Product
					id="46"
					title="LG F4WV709S2E"
					image="https://cdn.idealo.com/folder/Product/201633/8/201633878/s1_produktbild_max/lg-f4wv709s2e.jpg"
					description="Frontlader  9 kg  1.400 U/Min  WLAN (Wi-Fi)  wählbare Schleuderdrehzahl  Breite 60 cm  Tiefe 56 cm "
					price={2123}
					rating={3}
				/>
				<Product
					id="47"
					title="LG F4WV409S1"
					image="https://cdn.idealo.com/folder/Product/6651/8/6651827/s1_produktbild_max/lg-f4wv409s1.jpg"
					description="EU-Produktdatenblatt (PDF)  Frontlader  9 kg  1.400 U/Min  WLAN (Wi-Fi)  Startzeitvorwahl  283 min Waschdauer  Breite 60 cm  Tiefe 56 cm "
					price={699}
					rating={4}
				/>
				<Product
					id="48"
					title="LG F2WV3S70S3W"
					image="https://cdn.idealo.com/folder/Product/201549/8/201549839/s1_produktbild_max/lg-f2wv3s70s3w.jpg"
					description="EU-Produktdatenblatt (PDF)  Frontlader  7 kg  Mengenautomatik  Breite 60 cm  Tiefe 45,5 cm "
					price={723}
					rating={5}
				/>
			</div>
		</div>
	);
};

export default Home3;
