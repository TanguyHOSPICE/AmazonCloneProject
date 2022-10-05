import React from 'react';
import './Home.css';
import Ad from '../Banners/Ad';

function Home() {
	return (
		<div>
			<div className="home">
				<div className="home__container">
					<Ad />
					<div className="home__main">
						<div className="home__row">
							{/* Product */}
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
		</div>
	);
}

export default Home;
