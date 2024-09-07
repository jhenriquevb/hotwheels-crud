import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Container,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CarList({ cars, removeCar, editCar }) {
    const navigate = useNavigate();

    const handleEdit = (index) => {
        editCar(index);
        navigate("/add-car");
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Lista de Carros
            </Typography>
            <Grid container spacing={2}>
                {cars.map((car, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
                                    onClick={() => handleEdit(index)}
                                    sx={{ marginRight: 1 }}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => removeCar(index)}
                                >
                                    Excluir
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CarList;
