import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CarForm from "./CarForm";
import { BrowserRouter as Router } from "react-router-dom";
import api from "../../services/api";

jest.mock("../../services/api");

const setup = (props = {}) => {
    return render(
        <Router>
            <CarForm {...props} />
        </Router>
    );
};

test("renders CarForm and handles form submission for adding a new car", async () => {
    api.addCar = jest.fn().mockResolvedValue({ data: {} });

    setup();

    fireEvent.change(screen.getByLabelText(/Nome do Carro/i), {
        target: { value: "Hot Wheels" },
    });
    fireEvent.change(screen.getByLabelText(/Marca/i), {
        target: { value: "Hot Wheels Brand" },
    });
    fireEvent.change(screen.getByLabelText(/Cor/i), {
        target: { value: "Red" },
    });
    fireEvent.change(screen.getByLabelText(/Ano/i), {
        target: { value: "2024" },
    });

    fireEvent.click(screen.getByText(/Adicionar Carro/i));

    await waitFor(() => {
        expect(api.addCar).toHaveBeenCalledWith({
            name: "Hot Wheels",
            brand: "Hot Wheels Brand",
            color: "Red",
            year: "2024",
        });
    });
});

test("renders CarForm and handles form submission for editing a car", async () => {
    api.updateCar = jest.fn().mockResolvedValue({ data: {} });

    const editingCar = {
        id: 1,
        name: "Hot Wheels",
        brand: "Hot Wheels Brand",
        color: "Red",
        year: "2024",
    };

    setup({ editingCar });

    fireEvent.change(screen.getByLabelText(/Nome do Carro/i), {
        target: { value: "Updated Hot Wheels" },
    });
    fireEvent.change(screen.getByLabelText(/Marca/i), {
        target: { value: "Updated Brand" },
    });
    fireEvent.change(screen.getByLabelText(/Cor/i), {
        target: { value: "Blue" },
    });
    fireEvent.change(screen.getByLabelText(/Ano/i), {
        target: { value: "2025" },
    });

    fireEvent.click(screen.getByText(/Atualizar Carro/i));

    await waitFor(() => {
        expect(api.updateCar).toHaveBeenCalledWith({
            id: 1,
            name: "Updated Hot Wheels",
            brand: "Updated Brand",
            color: "Blue",
            year: "2025",
        });
    });
});
