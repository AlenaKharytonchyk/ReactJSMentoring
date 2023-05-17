import React from "react";
import styles from './Footer.module.scss';
import {Logo} from "../index";

const Footer = () => (
    <footer className={styles.footer}>
        <Logo/>
    </footer>
)

export default Footer;
