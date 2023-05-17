import React, {useEffect, useState} from "react";
import styles from "./Dialog.module.scss";
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
                <div className={styles["modal-container"]} data-testid="dialog">
                    <div className={styles["title"]}>{title.toUpperCase()}</div>
                    <div className={styles["dialog-body"]}>{children}</div>
                    <button data-testid="close-button" className={`${styles["close-button"]} ${styles['button']}`}onClick={onClose}>X</button>
                </div>
            </FocusTrap>,
            container
        )
    )
        : null;
}

export default Dialog;
