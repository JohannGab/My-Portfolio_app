import React from 'react'
import StyledFooter from './footer.style'

const Footer = () => {
    const myDate = new Date();
    return (
        <StyledFooter>
            <StyledFooter.Copyright>
                Copyright © {`${myDate.getFullYear()} `} 
                <StyledFooter.Link href="https://johann-gabelle-dev.fr">
                    johann-gabelle-dev.fr
                </StyledFooter.Link >
                {` / `}
                <StyledFooter.Link  href="https://www.linkedin.com/in/johann-gabelle-246455158/"
                    target="_blank">
                    by Johann Gabelle
                </StyledFooter.Link >
            </StyledFooter.Copyright>
        </StyledFooter>
    )
}

export default Footer