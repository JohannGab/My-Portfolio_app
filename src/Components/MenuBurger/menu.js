import React from 'react';
import StyledMenu  from './menu.style';

const Menu = ({ open, openAndClose }) => {

  return (
    <StyledMenu open={open} onClick={openAndClose} >
        <StyledMenu.Link href="#home">Home</StyledMenu.Link>
        <StyledMenu.Link href="#aboutMe">About Me</StyledMenu.Link>
        <StyledMenu.Link href="#competences">Compétences</StyledMenu.Link>
        <StyledMenu.Link href="#projets">Projets</StyledMenu.Link>
        <StyledMenu.Link href="#contact">Contact</StyledMenu.Link>
    </StyledMenu>
    )
}

export default Menu;
