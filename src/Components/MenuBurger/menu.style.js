import styled from 'styled-components';

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:  rgba(24, 24, 24, 0.934);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 30rem;
    width: 15rem;
    text-align: left;
    position: fixed;
    border-bottom-right-radius: 20rem;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    outline:none;
    z-index: 1;
    @media screen and (max-width: 640px) {
        width: 13rem;
        height: 25rem;
    }
`

StyledMenu.Link = styled.a `
    text-transform: uppercase;
    padding: 0 0 1.5rem 2rem;
    font-weight: bold;
    color: #52b3d9;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.2rem;
    :first-child {
            padding-top: 2rem;
        } 

    &:hover {
        color: white;
    }

    @media screen and (max-width: 640px) {
        font-size: 1rem; 
        :first-child {
            padding-top: 3rem;
        } 
    }
`

export default StyledMenu;