import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";

import BodyContainer from './components/BodyContainer'

const starWarsURL = 'https://swapi.py4e.com/api/people'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,  setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then((success) => {
        console.log('I am getting data/results..........', success.data.results);
        setCharacters(success.data.results);
      })
      .catch((err) => console.log(err));
  }, []);


  
  return (
    <BodyContainer className="App">
      <h1 className="Header">Star War Characters</h1>

      {characters.map((character, index) => (
      < Character character = {character} key = {index}/>
      ))}
     
    </BodyContainer>
  );
}

export default App;


