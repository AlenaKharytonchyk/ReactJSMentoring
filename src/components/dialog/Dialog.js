import React, {useState, useEffect} from "react";
import "./Dialog.scss";
import {createPortal} from "react-dom";

const Dialog = ({title, children, showModal}) => {
    const [modalVisible, setModalVisible] = useState(showModal);
    useEffect(() => {
        setModalVisible(showModal);
    }, [showModal])

    return modalVisible
        ? (
        createPortal(
            <div className="modal-container">
                <div className="title">{title.toUpperCase()}</div>
                <div className="dialog-body">{children}</div>
                <button className="close-button" onClick={() => setModalVisible(false)}>X</button>
            </div>,
            document.body
        )
    )
        : null;
}

export default Dialog;
