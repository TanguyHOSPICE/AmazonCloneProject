import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
	return (
		<div className="header">
			<div className="header__logoContainer">
				<div className="header__logo">
					<img className="header__logoImg" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
					{/* TODO:Make country dynamic */}
					<span className="header__country">.fr</span>
				</div>
			</div>

			{/* TODO:Make localisation dynamic */}
			<div className="header__localisationContainer">
				<div className="header__optionsLocator">
					<div className="header__locatorIconBox">
						<div className="header__locatorIcon"></div>
					</div>
					{/* Or make the header__locator like the header__logo made w/ a img */}
					<div className="header__optionsLocatorRight">
						<span className="header__optionLineOne">Bonjour</span>
						<span className="header__optionLineTwo">Entrez votre adresse</span>
					</div>
				</div>
			</div>

			<div className="header__search">
				<div>
					<select
						aria-describedby="searchDropdownDescription"
						class="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
						data-nav-digest="Ed9ZdDzeC9FUkB0y/H7/CyuRXxI="
						data-nav-selected="0"
						id="searchDropdownBox"
						name="url"
						tabindex="0"
						title="Rechercher dans"
					>
						<option selected="selected" value="search-alias=aps">
							<span className="aps">Toutes nos catégories</span>
						</option>
						<option value="search-alias=alexa-skills">Alexa Skills</option>
						<option value="search-alias=amazon-global-store">Amazon Global Store</option>
						<option value="search-alias=warehouse-deals">Amazon Warehouse</option>
						<option value="search-alias=pets">Animalerie</option>
						<option value="search-alias=amazon-devices">Appareils Amazon</option>
						<option value="search-alias=mobile-apps">Applis &amp; Jeux</option>
						<option value="search-alias=automotive">Auto et Moto</option>
						<option value="search-alias=luggage">Bagages</option>
						<option value="search-alias=beauty">Beauté et Parfum</option>
						<option value="search-alias=luxury-beauty">Beauté Premium</option>
						<option value="search-alias=jewelry">Bijoux</option>
						<option value="search-alias=gift-cards">Boutique chèques-cadeaux</option>
						<option value="search-alias=digital-text">Boutique Kindle</option>
						<option value="search-alias=diy">Bricolage</option>
						<option value="search-alias=baby">Bébés &amp; Puériculture</option>
						<option value="search-alias=shoes">Chaussures et Sacs</option>
						<option value="search-alias=kitchen">Cuisine &amp; Maison</option>
						<option value="search-alias=dvd">DVD &amp; Blu-ray</option>
						<option value="search-alias=grocery">Epicerie</option>
						<option value="search-alias=office-products">Fournitures de bureau</option>
						<option value="search-alias=appliances">Gros électroménager</option>
						<option value="search-alias=handmade">Handmade</option>
						<option value="search-alias=electronics">High-Tech</option>
						<option value="search-alias=hpc">Hygiène et Santé</option>
						<option value="search-alias=computers">Informatique</option>
						<option value="search-alias=mi">Instruments de musique &amp; Sono</option>
						<option value="search-alias=garden">Jardin</option>
						<option value="search-alias=toys">Jeux et Jouets</option>
						<option value="search-alias=videogames">Jeux vidéo</option>
						<option value="search-alias=stripbooks">Livres</option>
						<option value="search-alias=audible">Livres audio Audible</option>
						<option value="search-alias=software">Logiciels</option>
						<option value="search-alias=lighting">Luminaires et Eclairage</option>
						<option value="search-alias=luxury">Luxury Stores</option>
						<option value="search-alias=fashion">Mode</option>
						<option value="search-alias=under-ten-dollars">Moins de 10€</option>
						<option value="search-alias=watches">Montres</option>
						<option value="search-alias=popular">Musique : CD &amp; Vinyles</option>
						<option value="search-alias=classical">Musique classique</option>
						<option value="search-alias=instant-video">Prime Video</option>
						<option value="search-alias=specialty-aps-sns">Prévoyez et Économisez</option>
						<option value="search-alias=industrial">Secteur industriel et scientifique</option>
						<option value="search-alias=sports">Sports et Loisirs</option>
						<option value="search-alias=digital-music">Téléchargement de musique</option>
						<option value="search-alias=clothing">Vêtements et accessoires</option>
					</select>
				</div>
				<input className="header__inputSearch" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<div className="header__options signIn">
					<span className="header__optionLineOne">Bonjour,Identifiez-vous</span>
					<span className="header__optionLineTwo">
						Compte et listes
						{/* TODO:Add span Narrow */}
					</span>
				</div>
				<div className="header__options returns">
					<span className="header__optionLineOne">Retours</span>
					<span className="header__optionLineTwo">et commandes</span>
				</div>
				<div className="header__options basket">
					<span className="header__optionLineOne basket_container">
						<span className="header__basketCount">0</span>
						<div className="basket__icon"></div>
					</span>
					<span className="header__optionLineTwo">Panier</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
