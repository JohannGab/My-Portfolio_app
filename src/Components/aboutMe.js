import React from 'react';
import StyledAboutMe from './aboutMe.style'
import Divider from '../Images/separateur.png'
import Johann from '../Images/Johann.jpeg'
import {TEXT} from './TEXT/text'

const AboutMe = ({ url }) => {
    return (
        <StyledAboutMe id={url}>
            <StyledAboutMe.Title data-aos="slide-up" data-aos-duration="1000" >
                À PROPOS
            </StyledAboutMe.Title>
            <StyledAboutMe.ContainerImg>
                <StyledAboutMe.Img src={Divider} alt="séparation" />
            </StyledAboutMe.ContainerImg>
            <StyledAboutMe.ContainerAvatar>
                <StyledAboutMe.containerText>
                    <StyledAboutMe.Text>
                        {TEXT}
                    </StyledAboutMe.Text>
                </StyledAboutMe.containerText>
                <StyledAboutMe.Avatar src={Johann} alt="Photo de Johann" />
            </StyledAboutMe.ContainerAvatar>
        </StyledAboutMe>
    )
}

export default AboutMe