import React from 'react';
import './Home.css';
import Ad from '../Banners/Ad';
import Product from '../Products/Product';

function Home() {
	return (
		<div>
			<div className="home">
				<div className="home__main">
					<Ad />
					<div className="home__row">
						<Product
							id="1234"
							title={
								'Echo Dot (3ème génération), Tissu anthracite + Philips Hue White ampoule connectée (E27), Pack de 2, Fonctionne avec Alexa - Kit de démarrage Maison connectée'
							}
							price={27.99}
							image="https://images-na.ssl-images-amazon.com/images/I/41ZoUIcgAUL._AC_SR400,600_.jpg"
							rating={5}
						/>

						<Product
							id="234"
							title={
								'Blink Outdoor, Caméra de surveillance HD sans fil, résistante aux intempéries, Kit 1 caméra + Découvrez Blink Video Doorbell, Audio bidirectionnel, vidéo HD, Alexa intégré'
							}
							price={55.99}
							image="https://images-na.ssl-images-amazon.com/images/I/21zAVGUbN3L._AC_SR400,600_.jpg"
							rating={4}
						/>

						<Product
							id="34"
							title={
								'Blink Outdoor, Caméra de surveillance HD sans fil, résistante aux intempéries, Kit 1 caméra + Blink Mini, Caméra d&#39;intérieur connectée compacte à brancher, fonctionne avec Alexa'
							}
							price={55.99}
							image="	https://images-na.ssl-images-amazon.com/images/I/31I90+LtTnL._AC_SR400,600_.jpg"
							rating={5}
						/>
						{/* Product */}
						{/* Product */}
						{/* SignInCard */}
					</div>
					<div className="home__row">
						{/* Product */}
						{/* MultiProducts>Product */}
						{/* Product */}
						{/* MultiProducts>Product */}
					</div>
					<div className="home__row">{/* BannerProduct.TopSellers_Sport>Product */}</div>
					<div className="home__row">{/* BannerProduct.repurchased>Product */}</div>
					<div className="home__row">
						{/* MultiProducts>Product */}
						{/* Product */}
						{/* MultiProducts>Product */}
						{/* MultiProducts>Product */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
