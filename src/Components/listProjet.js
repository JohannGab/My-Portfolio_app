import React from 'react'
import StyledListProjet from './listProjet.style'

const ListProjet = ({ backgroundProjet, url, title, stack }) => {
    return (
        <StyledListProjet data-aos="zoom-out" data-aos-duration="1000">
            <StyledListProjet.Link href={url} target="_blank" title={stack}>
                <StyledListProjet.background backgroundProjet={backgroundProjet} />
                    <StyledListProjet.Text>{title}</StyledListProjet.Text>
            </StyledListProjet.Link>
        </StyledListProjet>
    )
}

export default ListProjet;