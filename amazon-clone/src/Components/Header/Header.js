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

			{/* TODO:Make localisation dynamic */}
			<div className="header__localisation">
				<div className="header__locator"></div>
				{/* Or make the header__locator like the header__logo made w/ a img */}
				<div className="header__optionsLocator">
					<span className="header__optionLineOne">Bonjour</span>
					<span className="header__optionLineTwo">Entrez votre adresse</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
