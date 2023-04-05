import React from "react";
import "./Dialog.scss";
import {createPortal} from "react-dom";
import FocusTrap from "focus-trap-react";

const Dialog = ({title, children, showModal, onClose}) => {

    return showModal
        ? (
        createPortal(
            <FocusTrap>
                <div className="modal-container" data-testid="dialog">
                    <div className="title">{title.toUpperCase()}</div>
                    <div className="dialog-body">{children}</div>
                    <button data-testid="close-button" className="close-button" onClick={onClose}>X</button>
                </div>
            </FocusTrap>,
            document.querySelector('.App')
        )
    )
        : null;
}

export default Dialog;
