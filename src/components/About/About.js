import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Sobre
            </Typography>
            <Typography variant="body1">
                Esta é uma aplicação para um CRUD de carros HotWheels.
            </Typography>
        </Container>
    );
}

export default About;
