import React from 'react';
import './Header.css';
// import SearchIcon from '@mui/icons-material/icon/Search';

function Header() {
	return (
		<div className="header__Components">
			<div className="header__LogoContainer">
				<img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
				<span className="header__optionLineTwo">.fr</span>
			</div>
			<div className="header__localisationContainer">
				<img className="header__locatorLogo" src="https://pngimg.com/uploads/gps/gps_PNG60.png" alt="location logo" />
				<div className="header__option">
					<span className="header__optionLineOne">Bonjour</span>
					<span className="header__optionLineTwo">Entrez votre adresse</span>
				</div>
			</div>
			<div className="header__search">
				{/* list. */}
				<input type="text" className="header__searchInput" />
				{/* <SearchIcon /> */}
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
