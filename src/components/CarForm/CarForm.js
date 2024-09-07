import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Button,
    Container,
    Box,
    Snackbar,
    Alert,
} from "@mui/material";
import api from "../../services/api";

function CarForm({ editingCar, setEditingCar }) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (editingCar) {
            setName(editingCar.name);
            setBrand(editingCar.brand);
            setColor(editingCar.color);
            setYear(editingCar.year);
        }
    }, [editingCar]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && brand && color && year) {
            const car = { name, brand, color, year };
            try {
                if (editingCar) {
                    await api.updateCar({ ...car, id: editingCar.id });
                    setEditingCar(null);
                    setMessage("Carro atualizado com sucesso!");
                    setMessageType("success");
                } else {
                    await api.addCar(car);
                    setMessage("Carro adicionado com sucesso!");
                    setMessageType("success");
                }
                navigate("/cars");
            } catch (error) {
                setMessage("Erro ao salvar carro.");
                setMessageType("error");
            }
            clearMessage();
        }
    };

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Nome do Carro"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="Marca"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="Cor"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="Ano"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary">
                    {editingCar ? "Atualizar Carro" : "Adicionar Carro"}
                </Button>
            </Box>
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
        </Container>
    );
}

export default CarForm;
