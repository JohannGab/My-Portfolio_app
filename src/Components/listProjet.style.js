import styled from 'styled-components';

const StyledListProjet = styled.div`
    height: 14rem;
`
StyledListProjet.Link = styled.a`
    text-decoration: none;
`

StyledListProjet.background  = styled.div`
    margin: 0.5rem 0.5rem;
    width: 18rem;
    height: 12rem;
    background-image: url(${({backgroundProjet}) => backgroundProjet});
    background-repeat: no-repeat;
    border: solid 0.2rem #52b3d9;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    &:hover  {
        filter: sepia(1);
    }
`

StyledListProjet.Text = styled.p`
    opacity: 0;
    position: relative;
    top: -5rem;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    background-color: #52b3d9;;
    width: 10rem;
    border-radius: 0.2rem;

    ${StyledListProjet}:hover & {
        opacity: 10;
    }
`

export default StyledListProjet;