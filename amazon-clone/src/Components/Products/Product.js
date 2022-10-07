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
						<p></p>
					</div>
					{/* <img src="" alt="" /> */}
					<button>Ajouter au panier</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
