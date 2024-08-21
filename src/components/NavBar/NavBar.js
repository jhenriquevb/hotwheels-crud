import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/about">Sobre</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/cars">Carros</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/add-car">Adicionar Carro</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
