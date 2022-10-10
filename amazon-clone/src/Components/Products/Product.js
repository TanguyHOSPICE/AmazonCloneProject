import React from 'react';
import './Product.css';

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<div className="product__price">
					<p>titre + descriptif</p>
					<p className="product__price">
						<small>€</small>
						<strong>11,99</strong>
						{/* <strong>${price}</strong> */}
					</p>
					<div className="product__rating">
						<p>{/* star */}</p>
					</div>
				</div>
				<img src="" alt="" />
			</div>
			<button>Ajouter au panier</button>
		</div>
	);
}

export default Product;
