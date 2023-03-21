import React, {useState} from "react";
import "./PopUp.scss";

const PopUp = () => {
    const [opened, setOpened] = useState(false);
    const expandMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpened(true);
    }

    const closeMenu = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpened(false);
    }

    return (
        <>
            {opened
                ? (<div className="open-state">
                    <div onClick={closeMenu} data-testid="popup-close">X</div>
                    <div className="wrapper">
                        <span>EDIT</span>
                        <span>DELETE</span>
                    </div>
                </div>)
                : (<div className="close-state" onClick={expandMenu} data-testid="popup-open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><path fill="white" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28Zm-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28Zm0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28Z"/></svg>
                </div>)
            }
        </>

    )
}

export default PopUp;
