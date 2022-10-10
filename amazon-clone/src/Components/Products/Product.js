import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

// Add props to customize each product
function Product({ title, image, price, rating }) {
	return (
		<div className="product">
			<img src={image} alt="Product" />
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>€</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<StarIcon className="star" />
							</p>
						))}
				</div>
				<button>Ajouter au panier</button>
			</div>
		</div>
	);
}

export default Product;
