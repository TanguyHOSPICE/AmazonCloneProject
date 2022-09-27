import React from 'react';
import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';
// import Header from './Header';

function App() {
	return (
		<div className="app">
			<NavBar />
			<MainPage />
			{/* IMRC//CCC:Create directly the component */}
		</div>
	);
}

export default App;
