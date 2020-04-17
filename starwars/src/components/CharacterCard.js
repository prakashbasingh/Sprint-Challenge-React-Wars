import React, {useState, useEffect} from 'react';




const CharacterCard = ({propsOfCharacter}) => {

    return(
        <div>
            <CharacterBio name = {propsOfCharacter.name}
                          homeworld = {propsOfCharacter.homeworld}
                          films = {propsOfCharacter.films[0,1,2,3,4]}
                          species = {propsOfCharacter.species[0]}
                          starwhips = {propsOfCharacter.starships[0,1]}
                          />
        </div>
    )


}