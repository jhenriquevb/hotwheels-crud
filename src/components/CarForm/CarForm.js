import React, { useState } from "react";
import styles from "./CarForm.module.css";

function CarForm({ addCar }) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && brand && color && year) {
            addCar({ name, brand, color, year });
            setName("");
            setBrand("");
            setColor("");
            setYear("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Nome do Carro"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="Cor"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Ano"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Adicionar Carro
            </button>
        </form>
    );
}

export default CarForm;
