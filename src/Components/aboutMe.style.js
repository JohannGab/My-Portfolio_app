import styled from 'styled-components'

const StyledAboutMe = styled.div`
    padding: 8rem 0;
    @media screen and (max-width: 1024px) {
        text-align: center; 
        padding-top: 2rem;
        padding-bottom: 0;
    }
`
StyledAboutMe.Title = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: #52b3d9;
    font-weight: bold;
`

StyledAboutMe.ContainerImg = styled.div`
    text-align: center;
    margin-top: -5rem;
    @media screen and (max-width: 640px) {
            margin-top: -3rem;
        }
`

StyledAboutMe.Img = styled.img`
    width: 25rem;
    @media screen and (max-width: 640px) {
        width: 10rem;
    }
`

StyledAboutMe.ContainerAvatar = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding-top: 5rem;
    margin-top: -5rem;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`

StyledAboutMe.containerText = styled.div`
    width: 40rem;
    @media screen and (max-width: 1024px) {
        width: 100%;  
    }
`

StyledAboutMe.Text = styled.p`
    font-size: 1.1rem;
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
        padding: 0 2rem;
    }
    @media screen and (min-width: 640px) and (max-width: 800px) {
        font-size: 1rem;
        padding: 0 2rem;
    }
`

StyledAboutMe.Avatar = styled.img`
    width: 15rem;
    filter: grayscale(1);
    border-radius: 50%;
    box-shadow: 1rem 1rem 1rem grey;
    &:hover {
        filter: none;
    }
    @media screen and (max-width: 1024px) {
        margin-top: 2rem;
    }
`

export default StyledAboutMe;