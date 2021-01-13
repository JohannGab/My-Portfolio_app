import styled from 'styled-components'
import imageHome from '../Images/HomePage.png'

const StyledContact = styled.div`
    background-image: url(${imageHome});
    text-align: center;
    color: white;
    padding: 2rem 0;
`

StyledContact.Title = styled.h4`
    color: white;
    font-size: 2rem;
    font-weight: bold;
`

StyledContact.ContainerImg = styled.div`
    margin-top: -5rem;
        @media screen and (max-width: 640px) {
            margin-top: -3rem;
        }
`
StyledContact.Img= styled.img`
    width: 25rem;
    margin-bottom: 2rem;
        @media screen and (max-width: 640px) {
            width: 10rem;
        }
`

StyledContact.Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: -5rem;
        @media screen and (max-width: 640px) {
            margin-top: -3rem;
        }
`
StyledContact.Label= styled.label`

`

StyledContact.ContainerInput = styled.div`
`

StyledContact.Input = styled.input`
    margin: 1rem 0;
    height: 2rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem #52b3d9;
    border-radius: 5rem;
    padding-left: 1rem;
    
    :focus {
        background-color: #52b3d9;
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`

StyledContact.InputMessage = styled.textarea`
    margin: 1rem 0;
    height: 10rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem #52b3d9;
    border-radius: 1rem;
    padding: 1rem;
    
    :focus {
        background-color: #52b3d9;
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`

StyledContact.InputSend = styled.input`
    font-size: 1rem;
    margin: 1rem 0;
    height: 2rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem #52b3d9;
    border-radius: 5rem;
    :focus {
        background-color: #52b3d9;
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`

export default StyledContact;