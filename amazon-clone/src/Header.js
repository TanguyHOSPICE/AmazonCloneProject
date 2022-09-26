import React from 'react';
import './Header.css';

function Header() {
	return (
		<div>
			<div className="header">
				<img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
			</div>
			<div className="header__localisation">
				<span className="header__optionLineOne">Bonjour</span>
				{/* logo */}
				<span className="header__optionLineTwo">Entrez votre adresse</span>
			</div>
			<div className="header__search">
				{/* list. */}
				<input type="text" className="header__searchInput" />
				{/* logo */}
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Bonjour,Identifiez-vous</span>
					<span className="header__optionLineTwo">Comptes et listes</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Retours</span>
					<span className="header__optionLineTwo">et commandes</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne"></span>
					<span className="header__optionLineTwo"></span>
				</div>
			</div>
		</div>
	);
}

export default Header;
