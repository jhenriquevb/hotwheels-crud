import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CarList from "./components/CarList/CarList";
import CarForm from "./components/CarForm/CarForm";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import styles from "./App.module.css";

function App() {
    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const addCar = (car) => {
        if (editingCar !== null) {
            const updatedCars = cars.map((c, index) =>
                index === editingCar ? car : c
            );
            setCars(updatedCars);
            setEditingCar(null);
            setMessage("Carro atualizado com sucesso!");
        } else {
            setCars([...cars, car]);
            setMessage("Carro adicionado com sucesso!");
        }
        setMessageType("success");
        clearMessage();
    };

    const editCar = (index) => {
        setEditingCar(index);
    };

    const removeCar = (indexToRemove) => {
        setCars(cars.filter((_, index) => index !== indexToRemove));
        setMessage("Carro removido com sucesso!");
        setMessageType("warning");
        clearMessage();
    };

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    return (
        <Router>
            <NavBar />
            {message && (
                <div className={`${styles.message} ${styles[messageType]}`}>
                    {message}
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/cars"
                    element={
                        <CarList
                            cars={cars}
                            removeCar={removeCar}
                            editCar={editCar}
                        />
                    }
                />
                <Route
                    path="/add-car"
                    element={
                        <CarForm
                            addCar={addCar}
                            editingCar={cars[editingCar]}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
