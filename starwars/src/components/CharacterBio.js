import React, {useState, useEffect} from 'react';




const CharacterBio = ({ name, homeWorld, films, species,starShips }) => {

    return(
        <div>
            <h4 className = 'characterBio'>Name: {name}</h4>
        </div>
    )

}