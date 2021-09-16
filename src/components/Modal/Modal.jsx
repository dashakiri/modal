import React, { Component } from "react";
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (e) => {
        if (e.code === 'Escape') {
            this.props.onModalClose();
        };
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onModalClose();
        }
    }

    render() {
        return createPortal(
            <ModalBackdrop onClick={this.handleBackdropClick}>
                <ModalContent></ModalContent>
            </ModalBackdrop>,
            modalRoot,
        );
    };
};