import React, { useEffect } from 'react'
import StyledHeader from './hearder.style'
import { useDencrypt } from "use-dencrypt-effect";
import { options, values } from './TEXT/text'

const Header = ({ url }) => {
    const { result, dencrypt } = useDencrypt(options);
    useEffect(() => {
        let i = 0;
        const action = setInterval(() => {
            dencrypt(values[i]);
            i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);
        return () => clearInterval(action);
    }, [dencrypt, result]);

    return (
        <StyledHeader id={url}>
            <StyledHeader.MyName>JOHANN GABELLE</StyledHeader.MyName>
            <StyledHeader.Title>
                <span style={{color: '#52b3d9'}}>DÉVELOPPEUR </span>
                <span style={{color: '#51b590'}}>WEB</span>
            </StyledHeader.Title>
            <StyledHeader.Welcome>{result}</StyledHeader.Welcome>
        </StyledHeader>
    )
}

export default Header