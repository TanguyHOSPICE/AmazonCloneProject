import React from 'react';
import './Ad.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Ad() {
	return (
		<Carousel>
			<div className="home__banner">
				<img src="https://m.media-amazon.com/images/I/61oQwPh+arL._SX3000_.jpg" alt="exclusiv offer" className="home__image" />
				{/* TODO: Make the img dynamic */}
				<img src="https://m.media-amazon.com/images/I/717wlrF129L._SX3000_.jpg" alt="the lord of the ring" className="home__image" />
				<img src="https://m.media-amazon.com/images/I/71hE6KmyCIL._SX3000_.jpg" alt="amazon pack" className="home__image" />
				<img src="https://m.media-amazon.com/images/I/71TSjqNBwFL._SX3000_.jpg" alt="flash" className="home__image" />
			</div>
		</Carousel>
	);
}

export default Ad;
