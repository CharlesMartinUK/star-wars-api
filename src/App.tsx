import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

function App() { 
	
	var test ={
		"name":"stuff",
		"height":"0",
		"mass":"0",
	}
	
	
	let [starWarsData, setStarWarsData] = useState(test) // this extracts data useing test ???

    // 3. Create out useEffect function
	const url = "https://swapi.dev/api/people/1/"
	
  useEffect(() => {
		axios.get(url).then((responce) => {
			
			//if(responce.data != 404)
			setStarWarsData(responce.data) 
		//setStarWarsData({"name":"hello world"})
	
	})
		
  },[url])
	
	
  return (
    <div className="App">
      <header >
        Stars Wars API
        
      </header>
	  <div>
		Name:{starWarsData.name} Height:{starWarsData.height} Mass:{starWarsData.mass}
	  </div>
	 <footer>
		this is the footer
	 </footer>
    </div>
  );
}

export default App;
