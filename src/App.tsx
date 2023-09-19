//import React, {useState, useEffect} from 'react';
//import axios from "axios";

import StarWarsAPICall from "./components/get_data"
//import {StarWarsCharacter} from './components/starwars_character'

import './App.css';

function App() { 
	
  return (
    <div className="App">
      <header >
        Star Wars API
        <img src="star-wars-logo-980.png" alt="Star Wars Logo" />
		</header>
	  <div>
		<StarWarsAPICall />
	  </div>
	 <footer>
		
	 </footer>
    </div>
  );
}

export default App;
