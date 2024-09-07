import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    HotWheels CRUD
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    Sobre
                </Button>
                <Button color="inherit" component={Link} to="/cars">
                    Carros
                </Button>
                <Button color="inherit" component={Link} to="/add-car">
                    Adicionar Carro
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
