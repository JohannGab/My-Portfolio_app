import styled from 'styled-components'
import ImageHome from '../Images/HomePage.png'

const StyledHeader = styled.div`
    align-items: center;
    border: 1px solid #000;
    background-image: url(${ImageHome});
    display: flex;
    flex-direction: column;
    height: 50rem;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        height: 30rem;
    }
`

StyledHeader.MyName = styled.h2`
    color: white;
    font-size: 3rem;
    @media screen and (max-width: 640px) {
        font-size: 1.5rem;
    }
`

StyledHeader.Title = styled.h1`
    font-weight: bold;
    font-size: 5rem;
    margin-top: -2rem; 
    @media screen and (max-width: 640px) {
        font-size: 2rem;
        margin-top: 0;
    }
    @media screen and (min-width: 640px) and (max-width: 800px) {
        font-size: 4rem;
    }
`

StyledHeader.Welcome = styled.p`
    color: white;
    font-size: 1.8rem;
    margin-top: -2rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        margin-top: 0;
    }
`

export default StyledHeader;