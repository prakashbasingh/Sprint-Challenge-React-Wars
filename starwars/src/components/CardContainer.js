import styled from 'styled-components'



const CardContainer = styled.div`
    border: 2px solid black;
    margin: 4rem;
    border-radius: 2rem;
    box-shadow: 0 0 20px 8px white;

    h3{
        color: white;
        border: 1px solid black;
        transition: all 1s ease-in-out;
        margin: 2rem 10rem;
        border-radius: 1rem;
        box-shadow: 0 0 20px 8px black;
        background-color: black;

  
        &:hover {
         color: red;
         background-color: gold;
         transition: all 1s ease-in-out;
         box-shadow: 0 0 20px 8px magenta;
         border-radius: 2rem;
         padding: 5px;
        }
    }
    div{
        color: white;
        border: 2px solid black;
        box-shadow: 0 0 20px 8px black;
        margin: 2rem 10rem;
        border-radius: 2rem;
        font-weight: bold;
        transition: all 1s ease-in-out;

        
        &:hover {
         color: red;
         background-color: gold;
         transition: all 1s ease-in-out;
         box-shadow: 0 0 20px 8px magenta;
         border-radius: 2rem;
         padding: 5px;
        }
    }


    }


`


export default CardContainer