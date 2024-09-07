import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

test("renders NavBar with links", () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Carros/i)).toBeInTheDocument();
    expect(screen.getByText(/Adicionar Carro/i)).toBeInTheDocument();
});
