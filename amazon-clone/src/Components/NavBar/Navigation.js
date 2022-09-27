import React, { Component } from 'react'; //IMRC:input our components & react lib into
import './NavBar.css';

// CCC:can create multiple component across the app
class NavBar extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<div className="navbar__component">
				<div className="navbar__logo"></div>
				<div className="navbar__locator">
					<div className="navbar__locatorImg"></div>
					<div className="navbar__location">Country</div>
				</div>
				<div className="navbar__searchComponent">
					<div>
						<select className="navbar__Dropdown">
							<option value="All">Toutes nos catégories</option>
							<option value="Alexa Skills">Alexa Skills</option>
							<option value="Amazon Global Store">Amazon Global Store</option>
							<option value="Amazon Warehouse">Amazon Warehouse</option>
							<option value="Animalerie">Animalerie</option>
							<option value="Appareil Amazon">Appareil Amazon</option>
							<option value="Appli & Jeux">Appli & Jeux</option>
							<option value="Auto et Moto">Auto et Moto</option>
							<option value="Bagages">Bagages</option>
							<option value="Beauté et Parfum">Beauté et Parfum</option>
							<option value="Beauté Premium">Beauté Premium</option>
							<option value="Bijoux">Bijoux</option>
							<option value="Boutique chèques-cadeaux">Boutique chèques-cadeaux</option>
							<option value="Boutique Kindle">Boutique Kindle</option>
							<option value="Bricolage">Bricolage</option>
							<option value="Bébés & Puériculture">Bébés & Puériculture</option>
							<option value="Chaussures et Sacs">Chaussures et Sacs</option>
							<option value="Cuisine & Maison">Cuisine & Maison</option>
							<option value="DVD & Blu-ray">DVD & Blu-ray</option>
							<option value="Epicerie">Epicerie</option>
						</select>
					</div>
					<div>
						<input type="text" className="navbar__searchBox" />
					</div>
					<div className="navbar__searchIconBox">
						<div className="navbar__searchIcon"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
