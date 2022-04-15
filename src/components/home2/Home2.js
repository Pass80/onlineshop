import React from "react";
import "./Home2.css";
import Product from "../product/Product";

const Home2 = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="banner"
			/>
			<div className="home__row">
				<Product
					id="25"
					title="Huawei Nova 9 "
					image="https://cdn.idealo.com/folder/Product/201644/3/201644378/s1_produktbild_max/huawei-nova-9-black.jpg"
					description="Android Handy  6,57 Zoll  Full HD  50 MP  8 GB RAM  128 GB interner Speicher  Android 10  4.300 mAh Produktdetails"
					price={600}
					rating={4}
				/>
				<Product
					id="26"
					title="Huawei P30 lite"
					image="https://cdn.idealo.com/folder/Product/6515/7/6515775/s1_produktbild_max/huawei-p30-lite-128gb-peacock-blue.jpg"
					description="LTE Smartphone  6,15 Zoll  Full HD  48 MP  4 GB RAM  Android 10  3.340 mAh  Speicher erweiterbar "
					price={350}
					rating={3}
				/>
				<Product
					id="27"
					title="Huawei Nova 9 Black"
					image="https://cdn.idealo.com/folder/Product/201644/3/201644378/s1_produktbild_max/huawei-nova-9-black.jpg"
					description="Android Handy  6,57 Zoll  Full HD  50 MP  8 GB RAM  128 GB interner Speicher  Android 10  4.300 mAh   "
					price={500}
					rating={4}
				/>
				<Product
					id="28"
					title="Huawei P40 Pro"
					image="https://cdn.idealo.com/folder/Product/200195/4/200195475/s1_produktbild_max/huawei-p40-pro-blush-gold.jpg"
					description="5G Handy  6,58 Zoll  Full HD  50 MP  8 GB RAM  256 GB interner Speicher  Android 10  4.200 mAh  "
					price={499}
					rating={4}
				/>
			</div>
			<div className="home__row">
				<Product
					id="29"
					title="Huawei MateBook 14 "
					image="https://cdn.idealo.com/folder/Product/201395/7/201395748/s1_produktbild_max/huawei-matebook-14-53011xju.jpg"
					description="Multimedia Notebook  14 Zoll  512 GB SSD-Speicher  1,49 kg "
					price={900}
					rating={4}
				/>
				<Product
					id="30"
					title="Huawei MateBook D 16"
					image="https://cdn.idealo.com/folder/Product/201716/5/201716567/s1_produktbild_max/huawei-matebook-13s-53012rbs.jpg"
					description="Multimedia Notebook  16,1 Zoll  Full HD  AMD Ryzen 5 4600H  16 GB RAM  512 GB SSD-Speicher  AMD Radeon Graphics  Akkulaufzeit 9,5 h  1,74 kg   "
					price={1600}
					rating={4}
				/>
				<Product
					id="31"
					title="Huawei MateBook 16 "
					image="https://cdn.idealo.com/folder/Product/201610/8/201610818/s1_produktbild_max/huawei-matebook-16-53011wls.jpg"
					description="Multimedia Notebook  16 Zoll  AMD Ryzen 7 5800H  16 GB RAM  512 GB SSD-Speicher  AMD Radeon Graphics  Windows 10 Home  Akkulaufzeit 12,5 h  1,99 kg  "
					price={1300}
					rating={4}
				/>
				<Product
					id="32"
					title="Huawei MateBook D 15"
					image="https://cdn.idealo.com/folder/Product/201816/1/201816139/s1_produktbild_max_1/huawei-matebook-d-15-53012rux.jpg"
					description="Business Notebook  15,6 Zoll  Full HD  AMD Ryzen 5 5500U  8 GB RAM  512 GB SSD-Speicher  AMD Radeon Graphics  Windows 11 Home  Akkulaufzeit 7 h  1,5 kg  "
					price={980}
					rating={5}
				/>
			</div>
			<div className="home__row">
				<Product
					id="33"
					title="Honor MagicWatch 2"
					image="https://cdn.idealo.com/folder/Product/7014/6/7014601/s1_produktbild_max/honor-magicwatch-2-46mm.jpg"
					description="Android Smartwatch  Gehäusefarbe schwarz  1,39 Zoll  Unisex  iOS kompatibel  Android kompatibel  Kunststoff Gehäuse  AMOLED Display  "
					price={250}
					rating={5}
				/>
				<Product
					id="34"
					title="Honor Watch Magic"
					image="https://cdn.idealo.com/folder/Product/6462/5/6462563/s1_produktbild_max/honor-watch-magic.jpg"
					description="Android Smartwatch  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  AMOLED Display "
					price={180}
					rating={3}
				/>
				<Product
					id="35"
					title="Honor MagicWatch 2 "
					image="https://cdn.idealo.com/folder/Product/200249/1/200249186/s1_produktbild_max/honor-magicwatch-2-42mm-flax-brown.jpg"
					description="Android Smartwatch  1,2 Zoll  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  AMOLED Display"
					price={199}
					rating={3}
				/>
				<Product
					id="36"
					title="Honor Watch Magic"
					image="https://cdn.idealo.com/folder/Product/6462/5/6462565/s1_produktbild_max/watch-magic-silber.jpg"
					description="Android Smartwatch  Gehäusefarbe silber  Unisex  iOS kompatibel  Android kompatibel  Edelstahl Gehäuse  AMOLED Display  "
					price={250}
					rating={3}
				/>
			</div>
		</div>
	);
};

export default Home2;
