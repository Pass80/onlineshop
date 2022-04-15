import React from "react";
import "./Home1.css";
import Product from "../product/Product";

const Home1 = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="banner"
			/>
			<div className="home__row">
				<Product
					id="13"
					title="Samsung Galaxy S21 FE"
					image="https://cdn.idealo.com/folder/Product/201736/2/201736291/s1_produktbild_max/samsung-galaxy-s21-fe-128gb-olive.jpg"
					description="LTE Smartphone  6,41 Zoll  Full HD  12 MP  6 GB RAM  128 GB interner Speicher  Android 12  4.500 mAh"
					price={800}
					rating={5}
				/>
				<Product
					id="14"
					title="Samsung Galaxy S20 FE"
					image="https://cdn.idealo.com/folder/Product/200687/5/200687511/s1_produktbild_max/samsung-galaxy-s20-fe-128gb-cloud-navy.jpg"
					description="Dual-SIM Handy  6,5 Zoll  Full HD  12 MP  6 GB RAM  128 GB interner Speicher  Android 12  4.500 mAh  Speicher erweiterbar "
					price={850}
					rating={3}
				/>
				<Product
					id="15"
					title="Samsung Galaxy S22 Ultra"
					image="https://cdn.idealo.com/folder/Product/201734/5/201734571/s1_produktbild_max/samsung-galaxy-s22-ultra-128gb-phantom-black.jpg"
					description="Dual-SIM Handy  6,8 Zoll  Quad HD  108 MP  8 GB RAM  128 GB interner Speicher  Android 12  5.000 mAh  "
					price={1150}
					rating={4}
				/>
				<Product
					id="16"
					title="Samsung Galaxy S22"
					image="https://cdn.idealo.com/folder/Product/201734/5/201734547/s1_produktbild_max/samsung-galaxy-s22-128gb-phantom-black.jpg"
					description="Dual-SIM Handy  6,1 Zoll  Full HD  50 MP  8 GB RAM  128 GB interner Speicher  Android 12  3.700 mAh  Reparaturfähigkeitsindex (max 10 Pkt) 8,2 "
					price={899}
					rating={5}
				/>
			</div>
			<div className="home__row">
				<Product
					id="17"
					title="Samsung Galaxy Tab S7 FE"
					image="https://cdn.idealo.com/folder/Product/201434/4/201434485/s1_produktbild_max/samsung-galaxy-tab-s7-fe-64gb-wifi-schwarz.jpg"
					description="Android-Tablet  12,4 Zoll  Bildschirmauflösungen 2.560 x 1.600 Pixel  4 GB RAM  64 GB  Android 11  microSD  8 MP  Akkulaufzeit 12 h "
					price={900}
					rating={4}
				/>
				<Product
					id="18"
					title="Samsung Galaxy Tab A7 Lite"
					image="https://cdn.idealo.com/folder/Product/201377/5/201377519/s1_produktbild_max/samsung-galaxy-tab-a7-lite-32gb-wifi-grau.jpg"
					description="Android-Tablet  8,7 Zoll  Bildschirmauflösungen 1.340 x 800 Pixel  3 GB RAM  32 GB  Android 11  microSD  8 MP  "
					price={1030}
					rating={4}
				/>
				<Product
					id="19"
					title="Samsung Galaxy Tab S8 "
					image="https://cdn.idealo.com/folder/Product/201828/8/201828805/s1_produktbild_max/samsung-galaxy-tab-s8-128gb-wifi-grau.jpg"
					description="Android-Tablet  11 Zoll  Bildschirmauflösungen 2.560 x 1.600 Pixel  8 GB RAM  128 GB  Android 12  microSD  13 MP  Akkulaufzeit 15 h  "
					price={1500}
					rating={3}
				/>
				<Product
					id="20"
					title="Samsung Galaxy Tab S8 Ultra"
					image="https://cdn.idealo.com/folder/Product/201828/7/201828781/s1_produktbild_max/samsung-galaxy-tab-s8-ultra-512gb-wifi-grau.jpg"
					description="Android-Tablet  14,6 Zoll  Bildschirmauflösungen 2.960 x 1.848 Pixel  16 GB RAM  512 GB  Android 12  microSD  13 MP  Akkulaufzeit 14 h Produktdetails "
					price={1400}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="21"
					title="Samsung Galaxy Watch4 Classic"
					image="https://cdn.idealo.com/folder/Product/201510/6/201510671/s1_produktbild_max/samsung-galaxy-watch4-classic-42mm-bluetooth-black.jpg"
					description="Android Smartwatch  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  Fluorelastomer Armband  Super AMOLED Display "
					price={250}
					rating={5}
				/>
				<Product
					id="22"
					title="Samsung Galaxy Watch4 Classic"
					image="https://cdn.idealo.com/folder/Product/201510/7/201510712/s1_produktbild_max/samsung-galaxy-watch4-classic-46mm-lte-silver.jpg"
					description="Android Smartwatch  Gehäusefarbe silber  Armbandfarbe weiß  1,36 Zoll  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  Fluorelastomer Armband  Super AMOLED Display "
					price={300}
					rating={4}
				/>
				<Product
					id="23"
					title="Samsung Galaxy Watch3 "
					image="https://cdn.idealo.com/folder/Product/200508/4/200508463/s1_produktbild_max/samsung-galaxy-watch3-41mm-mystic-bronze.jpg"
					description="Android Smartwatch  Gehäusefarbe bronze  Armbandfarbe bronze  1,2 Zoll  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  Leder Armband  Super AMOLED Display"
					price={399}
					rating={3}
				/>
				<Product
					id="24"
					title="Samsung Galaxy Watch Active2"
					image="https://cdn.idealo.com/folder/Product/6703/7/6703785/s1_produktbild_max/samsung-galaxy-watch-active2-44mm-aluminium-aqua-black.jpg"
					description="Android Smartwatch  Gehäusefarbe schwarz  Armbandfarbe schwarz  1,4 Zoll  Unisex  iOS kompatibel  Android kompatibel  Aluminium Gehäuse  Fluorelastomer Armband  Super AMOLED Display"
					price={150}
					rating={5}
				/>
			</div>
		</div>
	);
};

export default Home1;
