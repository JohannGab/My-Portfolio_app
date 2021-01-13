import styled from 'styled-components'
import ImageHome from '../Images/HomePage.png'

const StyledCompetences = styled.div`
    margin: 10rem 0;
    padding: 8rem 0;
    text-align: center;
    background-image: url(${ImageHome});
    color: white;
        @media screen and (max-width: 640px) {
            margin: 5rem 0;
            padding: 3rem 0;
        }
`
StyledCompetences.ContainerImg = styled.div`
    margin-top: -5rem;
        @media screen and (max-width: 640px) {
            margin-top: -3rem;
        }
`

StyledCompetences.Img = styled.img`
    width: 25rem;
        @media screen and (max-width: 640px) {
            width: 10rem;
        }
`

StyledCompetences.Title = styled.h3`
    font-weight: bold;
    font-size: 2rem;
    color: #52b3d9;
`

StyledCompetences.Divider = styled.div`
    display: flex;
        @media screen and (max-width: 1024px) {
            display: block;
        }
`

StyledCompetences.ContainerList = styled.div`
    text-align: start;
    width: 50%;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
`

StyledCompetences.Subtitle = styled.h4`
    padding-left: 4rem;
    font-size: 1.2rem;
`

StyledCompetences.Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
        @media screen and (max-width: 640px) {
            margin: 0 1rem 3rem 0;
        }
`

StyledCompetences.List = styled.li`
    list-style:none;
    margin: 1rem;
    padding: 1rem 2rem;
    background-color: #52b3d9;
    border: solid 0.1rem black;
    border-radius: 1rem;
    box-shadow: 0 0.2rem 0.1rem 0 black;
    
    &:hover {
        background-color: #EFF1F1;
        color: #52b3d9;
    }
        @media screen and (max-width: 640px) {
            margin: 0.2rem;
            padding: 0.5rem 0.5rem;
        }
`

export default StyledCompetences;