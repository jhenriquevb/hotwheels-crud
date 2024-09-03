import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarForm.module.css";

function CarForm({ addCar, editingCar }) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (editingCar) {
            setName(editingCar.name);
            setBrand(editingCar.brand);
            setColor(editingCar.color);
            setYear(editingCar.year);
        }
    }, [editingCar]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && brand && color && year) {
            addCar({ name, brand, color, year });
            setName("");
            setBrand("");
            setColor("");
            setYear("");
            navigate("/cars");
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
                {editingCar ? "Atualizar Carro" : "Adicionar Carro"}
            </button>
        </form>
    );
}

export default CarForm;
