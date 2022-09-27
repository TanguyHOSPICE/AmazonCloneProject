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
			</div>
		);
	}
}

export default NavBar;
