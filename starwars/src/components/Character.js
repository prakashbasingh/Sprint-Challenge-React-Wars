import React, {useState, useEffect} from 'react';
const starWarsURL = 'https://swapi.py4e.com/api/people'
import CharacterCard from "./CharacterCard";



// Write your Character component here
const Character = ()=>{
    const[characterData] = useState(results)

    return(
        <div className = 'character-container'>
            {characterData.map((character, index) => (
                <CharacterCard propsOfCharacter = {character} key = {index}/>
            ))}
        </div>

    );
};
export default Character;
