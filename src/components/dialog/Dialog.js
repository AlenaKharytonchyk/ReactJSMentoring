import React, {useState, useEffect} from "react";
import "./Dialog.scss";
import {createPortal} from "react-dom";
import FocusTrap from "focus-trap-react";

const Dialog = ({title, children, showModal}) => {
    const [modalVisible, setModalVisible] = useState(showModal);
    useEffect(() => {
        setModalVisible(showModal);
    }, [showModal])

    return modalVisible
        ? (
        createPortal(
            <FocusTrap>
                <div className="modal-container" data-testid="dialog">
                    <div className="title">{title.toUpperCase()}</div>
                    <div className="dialog-body">{children}</div>
                    <button data-testid="close-button" className="close-button" onClick={() => setModalVisible(false)}>X</button>
                </div>
            </FocusTrap>,
            document.body
        )
    )
        : null;
}

export default Dialog;
