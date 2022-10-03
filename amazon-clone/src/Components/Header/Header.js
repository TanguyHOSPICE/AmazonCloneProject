import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="header__amazon">
				<img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
				{/* TODO:Make country dynamic */}
				<p className="header__country">.fr</p>
			</div>
		</div>
	);
}

export default Header;
