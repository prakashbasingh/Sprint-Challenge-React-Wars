import React, {useState, useEffect} from 'react';




const CharacterBio = ({ name, homeworld, films, species,starships }) => {

    return(
        <div>
            <h4 className = 'characterBio'>Name: {name}</h4>
            <p className = 'characterBio'>Home World: {homeworld}</p>
            <p className = 'characterBio'>Films: {films[0,1,2,3,4]}</p>
            <p className = 'characterBio'>Species: {species[0]}</p>
            <p className = 'characterBio'>Star Ships: {starships[0,1]}</p>
        </div>
    )

}
export default CharacterBio