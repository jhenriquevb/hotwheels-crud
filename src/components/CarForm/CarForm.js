import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box } from "@mui/material";

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
            navigate("/cars");
        }
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
        </Container>
    );
}

export default CarForm;
