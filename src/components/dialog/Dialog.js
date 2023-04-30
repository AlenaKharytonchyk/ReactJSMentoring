import React, {useEffect, useState} from "react";
import "./Dialog.scss";
import {createPortal} from "react-dom";
import FocusTrap from "focus-trap-react";

const Dialog = ({title, children, showModal, onClose}) => {
    const [container, setContainer] = useState();

    useEffect(() => {
        setContainer(document.querySelector('.App'))
    }, [])

    return showModal && container
        ? (
        createPortal(
            <FocusTrap>
                <div className="modal-container" data-testid="dialog">
                    <div className="title">{title.toUpperCase()}</div>
                    <div className="dialog-body">{children}</div>
                    <button data-testid="close-button" className="close-button" onClick={onClose}>X</button>
                </div>
            </FocusTrap>,
            container
        )
    )
        : null;
}

export default Dialog;
