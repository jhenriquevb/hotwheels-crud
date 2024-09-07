import React from "react";
import { Container, Typography } from "@mui/material";

function Home() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Página Inicial
            </Typography>
            <Typography variant="body1">
                Bem-vindo ao CRUD de HotWheels!
            </Typography>
        </Container>
    );
}

export default Home;
