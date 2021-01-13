import React from 'react'
import { StyledModal, Container, ModalText, Button} from './modal.style'

const Modal = ({ textModal, resetForm }) => {
    return (
        <StyledModal>
            <Container>
                <ModalText>{textModal}</ModalText>
                <Button onClick={resetForm}>OK</Button>
            </Container>
        </StyledModal>
    )
}

export default Modal