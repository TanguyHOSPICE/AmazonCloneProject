import React from 'react';
import './Ad.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Ad() {
	const baseUrl = 'https://m.media-amazon.com/images/I/';
	const sliderDatas = [
		{
			id: 'slider__1',
			image: `${baseUrl}71TSjqNBwFL._SX3000_.jpg`,
			alt: 'flash',
		},
		{
			id: 'slider__2',
			image: `${baseUrl}717wlrF129L._SX3000_.jpg`,
			alt: 'the lord of the ring',
		},
		{
			id: 'slider__3',
			image: `${baseUrl}71hE6KmyCIL._SX3000_.jpg`,
			alt: 'amazon pack',
		},
		{
			id: 'slider__4',
			image: `${baseUrl}61oQwPh+arL._SX3000_.jpg`,
			alt: 'exclusiv offer',
		},
	];

	return (
		<Carousel>
			{sliderDatas.map((slide) => (
				// Key car c'est une méthode map
				<div key={slide.id} className="home__image">
					<img src={slide.image} alt={slide.alt} />
				</div>
			))}
		</Carousel>
	);
}

export default Ad;
