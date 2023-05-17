import React from "react";
import styles from "./Button.module.scss";

const Button = ({ buttonName, priority, onClick, classList }) => {
    const handleClick = () => {
      onClick(priority);
    };

    const classListString = classList?.reduce((acc, item) => {
      const className = styles[item] ?? item;
      return `${acc} ${className}`;
    }, '');
  
    return (
      <button
        className={`${styles.button} ${styles[`button-${buttonName}`] ?? ''} ${classListString}`}
        onClick={handleClick}
      >
        {buttonName}
      </button>
    );
}
export default Button;
