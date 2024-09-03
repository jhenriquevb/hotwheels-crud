import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CarList.module.css";

function CarList({ cars, removeCar, editCar }) {
    const navigate = useNavigate();

    const handleEdit = (index) => {
        editCar(index);
        navigate("/add-car");
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lista de Carros</h2>
            <ul className={styles.carList}>
                {cars.map((car, index) => (
                    <li key={index} className={styles.carItem}>
                        <div>
                            <strong>Nome:</strong> {car.name} <br />
                            <strong>Marca:</strong> {car.brand} <br />
                            <strong>Cor:</strong> {car.color} <br />
                            <strong>Ano:</strong> {car.year}
                        </div>
                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.editButton}
                                onClick={() => handleEdit(index)}
                            >
                                Editar
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => removeCar(index)}
                            >
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.addCarLink}>
                <Link to="/add-car">Adicionar carro</Link>
            </div>
        </div>
    );
}

export default CarList;
