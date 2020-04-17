import React, {useState, useEffect} from 'react';
import CardContainer from './CardContainer'


const starWarsURL = 'https://swapi.py4e.com/api/people'



// Write your Character component here
const Character = ({ character }) => {

    return(
        <CardContainer>
            <h3 >Name: {character.name}</h3>
            <div>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
            </div>

            
        </CardContainer>
    )

}
export default Character