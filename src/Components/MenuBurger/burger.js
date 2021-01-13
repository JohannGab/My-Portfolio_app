import React from 'react';
import StyledBurger from './burger.style';

const Burger = ({ open, openAndClose }) => {
return (
    <StyledBurger 
        open={open} 
        onClick={() => openAndClose()}
    >
        <StyledBurger.LineBurger open={open} />
        <StyledBurger.LineBurger open={open} />
        <StyledBurger.LineBurger open={open} />
        </StyledBurger>
    )
}

export default Burger;
