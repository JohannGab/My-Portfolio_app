import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: rgba(24, 24, 24, 0.934);
    text-align: center;
    padding-bottom: 0.1rem;
    border-top: solid 1px #52b3d9;
`

StyledFooter.Copyright = styled.p`
    color: #52b3d9;
    font-size: 1rem;
    @media screen and (max-width: 640px) {
            font-size: 0.7rem;
        }
`

StyledFooter.Link = styled.a`
    text-decoration: none;
    color: #52b3d9;
    &:hover {
        opacity: 0.6;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default StyledFooter;