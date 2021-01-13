import styled from 'styled-components';

export const StyledModal = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    background-color: #52b3d9;;
    width: 18rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const ModalText = styled.p`
    font-weight: 500;
    font-size: 0.9rem;
`

export const Button = styled.button`
    background-color: white;
    margin-left: 0.5rem;
    padding: 0;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1rem;
    border: none;
    font-weight: 600;
    color: #52b3d9;
    font-size: 0.7rem;
    text-align: center;
    &:focus {
        outline:none;
    }
    &:hover {
        background-color: grey;
        color: white;
    }
`