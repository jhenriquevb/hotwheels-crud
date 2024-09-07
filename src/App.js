import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import CarList from "./components/CarList/CarList";
import CarForm from "./components/CarForm/CarForm";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import api from "./services/api";

const theme = createTheme({
    typography: {
        fontFamily: "'Poppins', 'Roboto', sans-serif",
    },
});

function App() {
    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const fetchCars = async () => {
        try {
            const response = await api.getCars();
            setCars(response.data);
        } catch (error) {
            setMessage("Erro ao buscar carros.");
            setMessageType("error");
        }
    };

    const addCar = async (car) => {
        try {
            if (editingCar !== null) {
                await api.updateCar({ ...car, id: editingCar.id });
                setEditingCar(null);
                setMessage("Carro atualizado com sucesso!");
                setMessageType("success");
            } else {
                await api.addCar(car);
                setMessage("Carro adicionado com sucesso!");
                setMessageType("success");
            }
            await fetchCars();
        } catch (error) {
            setMessage("Erro ao salvar carro.");
            setMessageType("error");
        }
        clearMessage();
    };

    const removeCar = async (id) => {
        try {
            await api.removeCar(id);
            setCars(cars.filter((car) => car.id !== id));
            setMessage("Carro removido com sucesso!");
            setMessageType("warning");
        } catch (error) {
            setMessage("Erro ao excluir carro.");
            setMessageType("error");
        }
        clearMessage();
    };

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavBar />
                {message && (
                    <Snackbar
                        open={Boolean(message)}
                        autoHideDuration={3000}
                        onClose={clearMessage}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert onClose={clearMessage} severity={messageType}>
                            {message}
                        </Alert>
                    </Snackbar>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cars"
                        element={
                            <CarList
                                setEditingCar={setEditingCar}
                                removeCar={removeCar}
                            />
                        }
                    />
                    <Route
                        path="/add-car"
                        element={
                            <CarForm
                                editingCar={editingCar}
                                setEditingCar={setEditingCar}
                                addCar={addCar}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
