import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Container,
    Grid,
    Snackbar,
    Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function CarList({ setEditingCar }) {
    const [cars, setCars] = useState([]);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await api.getCars();
                setCars(response.data);
            } catch (error) {
                setMessage("Erro ao buscar carros.");
                setMessageType("error");
            }
        };
        fetchCars();
    }, []);

    const handleEdit = (car) => {
        setEditingCar(car);
        navigate("/add-car");
    };

    const handleDelete = async (id) => {
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
        <Container>
            <Typography variant="h4" gutterBottom>
                Lista de Carros
            </Typography>
            <Grid container spacing={2}>
                {cars.map((car) => (
                    <Grid item xs={12} sm={6} md={4} key={car.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Nome: {car.name}
                                </Typography>
                                <Typography>Marca: {car.brand}</Typography>
                                <Typography>Cor: {car.color}</Typography>
                                <Typography>Ano: {car.year}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleEdit(car)}
                                    sx={{ marginRight: 1 }}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDelete(car.id)}
                                >
                                    Excluir
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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
        </Container>
    );
}

export default CarList;
