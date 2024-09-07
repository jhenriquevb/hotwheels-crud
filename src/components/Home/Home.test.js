import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page", () => {
    render(<Home />);
    expect(screen.getByText(/Página Inicial/i)).toBeInTheDocument();
    expect(
        screen.getByText(/Bem-vindo ao CRUD de HotWheels!/i)
    ).toBeInTheDocument();
});
