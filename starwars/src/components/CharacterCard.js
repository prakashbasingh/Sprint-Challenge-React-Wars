import React, {useState, useEffect} from 'react';
import CharacterBio from "./CharacterBio";




const CharacterCard = ({propsOfCharacter}) => {

    return(
        <div>
            <CharacterBio name = {propsOfCharacter.name}
                          homeworld = {propsOfCharacter.homeworld}
                          films = {propsOfCharacter.films}
                          species = {propsOfCharacter.species}
                          starships = {propsOfCharacter.starships}
                          />
        </div>
    )


}
export default CharacterCard