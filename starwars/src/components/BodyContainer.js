import styled from 'styled-components'


const BodyContainer = styled.div`
    background-image: url('https://allhdwallpapers.com/wp-content/uploads/2017/05/Star-Wars-Battlefront-II-6.jpg');
    text-align: center;
    margin: 4rem;
    border: 2px solid black;
    border-radius: 2rem; 
    box-shadow: 0 0 20px 8px black;

    h1{
        background-color: black;
        height: 3rem;
        color: #443e3e;
        text-shadow: 1px 1px 5px #fff;
        margin: 2rem;
        border: 2px solid orange;
        border-radius: 2rem;
        box-shadow: 0 0 20px 8px black;

        transition: all 1s ease-in-out;
  
        &:hover {
            color: gold;
            transition: all 1s ease-in-out;
            box-shadow: 0 0 20px 8px magenta;
            border-radius: 2rem;
            padding: 5px;
            font-weight: bold;
        }
    }

    

`
export default BodyContainer