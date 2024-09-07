import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders About page", () => {
    render(<About />);
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(
        screen.getByText(
            /Esta é uma aplicação para um CRUD de carros HotWheels./i
        )
    ).toBeInTheDocument();
});
