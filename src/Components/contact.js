import React, { useState } from 'react';
import axios from 'axios';
import Divider from '../Images/separateur-white.png';
import StyledContact from './contact.style';
import Modal from './modal';

const Contact = ({ url }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [objet, setObjet] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [textModal, setTextModal] = useState('')


    const onNameChange = (event) => {
        setName(event.target.value)
    };
    
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const onTelChange = (event) => {
        setTel(event.target.value)
    };

    const onObjetChange = (event) => {
        setObjet(event.target.value)
    };

    const onMessageChange = (event) => {
        setMessage(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST", 
            url:"https://back-end-johann-a8d15cb40d06.herokuapp.com/send", 
            data:  {
                name,
                email,
                tel,
                objet,
                message
            }
        }).then((response)=>{
            if (response.data.status === 'success') {
                isOpenModal('Message envoyé')
            } else if (response.data.status === 'fail') {
                isOpenModal("Le message n'a pas été envoyé")
            }
        })
    }

    const isOpenModal = (value) => {
        setTextModal(value)
        setIsOpen(!isOpen)
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setTel('')
        setObjet('')
        setMessage('')
        setIsOpen(!isOpen)
    }

    return (
        <StyledContact id={url}>
            <StyledContact.Title data-aos="slide-up" data-aos-duration="1000">
                CONTACTEZ - MOI
            </StyledContact.Title>
            <StyledContact.ContainerImg>
                <StyledContact.Img src={Divider} alt="séparation" />
            </StyledContact.ContainerImg>
            <StyledContact.Form onSubmit={handleSubmit} method="POST">
                <StyledContact.Label>
                    Prénom & Nom <span style={{color: 'red'}}>*</span>
                </StyledContact.Label>
                <StyledContact.ContainerInput>
                <StyledContact.Input value={name} onChange={onNameChange} type="text" name="name" id="name" required />
                </StyledContact.ContainerInput>
                <StyledContact.Label>
                    Email <span style={{color: 'red'}}>*</span>
                </StyledContact.Label>
                <StyledContact.ContainerInput>
                <StyledContact.Input value={email} onChange={onEmailChange} type="text" name="email" id="email" required />
                </StyledContact.ContainerInput>
                <StyledContact.Label>
                    Téléphone
                </StyledContact.Label>
                <StyledContact.ContainerInput>
                <StyledContact.Input value={tel} onChange={onTelChange} type="text" name="telephone" id="telephone" />
                </StyledContact.ContainerInput>
                <StyledContact.Label>
                    Objet
                </StyledContact.Label>
                <StyledContact.ContainerInput>
                <StyledContact.Input value={objet} onChange={onObjetChange} type="text" name="objet" id="objet" />
                </StyledContact.ContainerInput>
                <StyledContact.Label>
                    Message <span style={{color: 'red'}}>*</span> 
                </StyledContact.Label>
                <StyledContact.ContainerInput>
                <StyledContact.InputMessage value={message} onChange={onMessageChange} type="text" name="message" id="message" />
                </StyledContact.ContainerInput>
                <StyledContact.ContainerInput>
                    <StyledContact.InputSend type="submit" value="ENVOYER" />  
                </StyledContact.ContainerInput>
            </StyledContact.Form>
            {isOpen 
                ?
                <Modal textModal={textModal} resetForm={resetForm} />
                :
                null
            }
        </StyledContact>
    )
}

export default Contact