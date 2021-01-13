import styled from 'styled-components';

const StyledProjets = styled.div`
    text-align: center;
    padding-bottom: 10rem;
`

StyledProjets.Title = styled.h4`
    color: #52b3d9;
    font-size: 2rem;
    font-weight: bold;
`

StyledProjets.ContainerImg = styled.div`
    margin-top: -5rem;
        @media screen and (max-width: 640px) {
            margin-top: -4rem;
        }
`
StyledProjets.Img= styled.img`
    width: 25rem;
    margin-bottom: 2rem;
        @media screen and (max-width: 640px) {
            width: 10rem;
        }
`

StyledProjets.ContainerProjet = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -2rem;
    margin-bottom: 6rem;
        @media screen and (max-width: 640px) {
            margin-top: -3rem;
            margin-bottom: -5rem;
        }
`

export default StyledProjets;