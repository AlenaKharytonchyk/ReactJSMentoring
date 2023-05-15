import React from "react";
import styles from  './Logo.module.scss';

const Logo = ({classNames = ''}) => (<div className={`${styles.logo} ${classNames}` }><span>netflix</span>roulette</div>)

export default Logo;
