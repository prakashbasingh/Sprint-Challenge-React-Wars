import React, {useState, useEffect} from 'react';
import CardContainer from './CardContainer'


// const starWarsURL = 'https://swapi.py4e.com/api/people'



// Write your Character component here
const CharacterSSS = ({ characterOOO }) => {

    return(
        <CardContainer>
            <h3 >Name: {characterOOO.name}</h3>
            <div>
                <p>Gender: {characterOOO.gender}</p>
                <p>Birth Year: {characterOOO.birth_year}</p>
                <p>Height: {characterOOO.height}</p>
                <p>Mass: {characterOOO.mass}</p>
            </div>

            
        </CardContainer>
    )

}
export default CharacterSSS