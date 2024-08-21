import React from "react";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Página Inicial</h1>
            <p className={styles.subText}>Bem-vindo ao CRUD de HotWheels!</p>
        </div>
    );
}

export default Home;
