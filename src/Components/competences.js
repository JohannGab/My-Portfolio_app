import React from 'react'
import StyledCompetences from './competences.style'
import Divider from '../Images/separateur-white.png'

const Competences = ({ url }) => {
    return (
        <StyledCompetences id={url}>
            <StyledCompetences.Title data-aos="slide-up" data-aos-duration="1000">
                COMPÉTENCES
            </StyledCompetences.Title>
            <StyledCompetences.ContainerImg>
                <StyledCompetences.Img src={Divider} alt="séparation" />
            </StyledCompetences.ContainerImg>
            <StyledCompetences.Divider>
            <StyledCompetences.ContainerList>
            <StyledCompetences.Subtitle>Compétences techniques</StyledCompetences.Subtitle>
                <StyledCompetences.Container>
                    <StyledCompetences.List>React</StyledCompetences.List>
                    <StyledCompetences.List>React-Native</StyledCompetences.List>
                    <StyledCompetences.List>Javascript</StyledCompetences.List>
                    <StyledCompetences.List>Next Js</StyledCompetences.List>
                    <StyledCompetences.List>Node js</StyledCompetences.List>
                    <StyledCompetences.List>Express</StyledCompetences.List>
                    <StyledCompetences.List>Mongodb</StyledCompetences.List>
                    <StyledCompetences.List>Mysql</StyledCompetences.List>
                    <StyledCompetences.List>HTLM / CSS</StyledCompetences.List>
                    <StyledCompetences.List>Sass</StyledCompetences.List>
                    <StyledCompetences.List>Styled Components</StyledCompetences.List>
                    <StyledCompetences.List>Wordpress</StyledCompetences.List>
                    <StyledCompetences.List>Bootstrap</StyledCompetences.List>
                </StyledCompetences.Container>
                </StyledCompetences.ContainerList>
                <StyledCompetences.ContainerList>
                    <StyledCompetences.Subtitle>Autres compétences </StyledCompetences.Subtitle>
                <StyledCompetences.Container>
                    <StyledCompetences.List>GIT</StyledCompetences.List>
                    <StyledCompetences.List>Github</StyledCompetences.List>
                    <StyledCompetences.List>Gitlab</StyledCompetences.List>
                    <StyledCompetences.List>Rigoureux</StyledCompetences.List>          
                    <StyledCompetences.List>Autonome</StyledCompetences.List>          
                    <StyledCompetences.List>Adaptable</StyledCompetences.List>          
                    <StyledCompetences.List>Organisé</StyledCompetences.List>        
                </StyledCompetences.Container>
                </StyledCompetences.ContainerList>
            </StyledCompetences.Divider>
        </StyledCompetences>
    )
}

export default Competences