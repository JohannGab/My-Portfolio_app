import React from 'react'
import StyledProjets from './projets.style'
import Divider from '../Images/separateur.png'
import ListProjet from './listProjet'
import patrickMistral from '../Images/ImgProjets/patrickMistral.png'
import lesAudacieux from '../Images/ImgProjets/lesAudacieux.png'
import snake from '../Images/ImgProjets/snake.png'
import sr from '../Images/ImgProjets/studioRevolution.png'
import taskList from '../Images/ImgProjets/react-native-logo.png'
import gitHub from '../Images/ImgProjets/gitHub.png'
import hulk from '../Images/ImgProjets/hulk.png'
import chatBox from '../Images/ImgProjets/chatBox.png'

const Projets = ({ url }) => {
    return (
        <StyledProjets id={url}>
            <StyledProjets.Title data-aos="slide-up" data-aos-duration="1000">
                PROJETS
            </StyledProjets.Title>
            <StyledProjets.ContainerImg>
                <StyledProjets.Img src={Divider} alt="séparation" />
            </StyledProjets.ContainerImg>
            <StyledProjets.ContainerProjet>
                <ListProjet 
                    backgroundProjet={patrickMistral}
                    url={'https://patrick-mistral.fr'}
                    title='Site web Patrick Mistral'
                    stack='WordPress, html, css, javascript'
                />
                <ListProjet 
                    backgroundProjet={lesAudacieux}
                    url={'https://les-audacieux-coiffure.fr'}
                    title='Site web Les Audacieux coiffure' 
                    stack='WordPress, html, css, javascript'
                />
                <ListProjet
                    backgroundProjet={snake} 
                    url={'https://github.com/JohannGab/Snake'}
                    title='Jeux Snake'
                    stack='Javascript'
                />
                <ListProjet
                    backgroundProjet={sr} 
                    url={'https://studiorevolution.fr'}
                    title='Site web Studio Révolution' 
                    stack='WordPress, html, css, javascript'
                />
                <ListProjet 
                    backgroundProjet={taskList}
                    url='https://github.com/JohannGab/TaskList-v2'
                    title='TaskList React Native'
                    stack='React Native, css'
                />
                <ListProjet 
                    backgroundProjet={hulk}
                    url='https://movies-project-app.netlify.app'
                    title='Projet description de film'
                    stack='React js, css, Bootstrap'
                />
                <ListProjet 
                    backgroundProjet={chatBox}
                    url='https://github.com/JohannGab/chatbox'
                    title='Tchat en ligne'
                    stack='React js, css, firebase'
                />
                <ListProjet 
                    backgroundProjet={gitHub}
                    url='https://github.com/JohannGab?tab=repositories'
                    title='Autres projets sur mon Github'
                    stack='Autres projets'
                />
            </StyledProjets.ContainerProjet>
        </StyledProjets>
    )
}

export default Projets;