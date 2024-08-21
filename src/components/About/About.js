import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Sobre</h1>
            <p className={styles.subText}>
                Esta é uma aplicação para um CRUD de carros HotWheels.
            </p>
        </div>
    );
}

export default About;
